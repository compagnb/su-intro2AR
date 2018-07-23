

var Planet = (function(){

	
	/*/ VRIABILI GLOBALI /*/
	var _this = this;

	
	var _renderer;
	var _scene;
	var _camera;
	var _cameraControl;	
			
	var _clock;
	
	// PLANET MAP
	var _textureMap;
	var _normalMap;
	var _specularMap;
	var _atmosphereMap;
	var _rotationSpeed;
	
	
	// AR
	var _onRenderFcts = [];
	var _arToolkitSource;
	var _arToolkitContext;
	var _markerControls;
			
			
	/*/ --- INIT PUBLIC --- /*/
	this.init = function(opt){
		
		_this.init(opt);
		
	};
	
	
	
	
	
	/*/ METODI PRIVATI /*/
	_this.init = function (opt) {
		
		if(opt && opt.textureMap) 		_textureMap = opt.textureMap;
		if(opt && opt.normalMap) 		_normalMap = opt.normalMap;
		if(opt && opt.specularMap) 		_specularMap = opt.specularMap;
		if(opt && opt.atmosphereMap) 	_atmosphereMap = opt.atmosphereMap;
		if(opt && opt.rotationSpeed) 	_rotationSpeed = opt.rotationSpeed;
		
		_this._start();

	};
	

	
	/*
	 * START
	 * 
	 */
	this._start = function(){
		
		_clock = new THREE.Clock();
		
		_scene 		= new THREE.Scene();
		
		_renderer	= new THREE.WebGLRenderer({antialias: true, alpha: true});
		_renderer.setClearColor(new THREE.Color('lightgrey'), 0);
		_renderer.setSize( 640, 640 );
		_renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		_renderer.shadowMapEnabled = true;
		_renderer.domElement.style.position = 'absolute';
		_renderer.domElement.style.top = '0px';
		_renderer.domElement.style.left = '0px';
		document.body.appendChild(_renderer.domElement);
		
		_camera = new THREE.PerspectiveCamera(75, 640 / 640, 0.1, 500);
		_scene.add(_camera);
		
		_this._createAR();
		
		
		_this._addPlanet();
		_this._addLight();
		_this._render();

	};
	
	
	
	/*
	 * 
	 * _createAR
	 * 
	 */
	this._createAR = function(){
		_arToolkitSource = new THREEx.ArToolkitSource({ sourceType : 'webcam' });
	
		_arToolkitSource.init(function onReady(){ onResize(); });
		
		// handle resize
		window.addEventListener('resize', function(){ onResize(); });
		
		function onResize(){
			_arToolkitSource.onResize();
			_arToolkitSource.copySizeTo(_renderer.domElement);
			if( _arToolkitContext.arController !== null ){
				_arToolkitSource.copySizeTo(_arToolkitContext.arController.canvas);	
			}	
		}
		////////////////////////////////////////////////////////////////////////////////
		//          initialize arToolkitContext
		////////////////////////////////////////////////////////////////////////////////
		
	
		// create atToolkitContext
		_arToolkitContext = new THREEx.ArToolkitContext({
			cameraParametersUrl: 'assets/data/camera_para.dat',
			detectionMode: 'mono',
		});
		// initialize it
		_arToolkitContext.init(function onCompleted(){
			// copy projection matrix to camera
			_camera.projectionMatrix.copy( _arToolkitContext.getProjectionMatrix());
		});
	
		// update artoolkit on every frame
		_onRenderFcts.push(function(){
			if( _arToolkitSource.ready === false )	return;
			_arToolkitContext.update( _arToolkitSource.domElement );
			// update scene.visible if the marker is seen
			_scene.visible = _camera.visible;
		});
			
		////////////////////////////////////////////////////////////////////////////////
		//          Create a ArMarkerControls
		////////////////////////////////////////////////////////////////////////////////
		
		// init controls for camera
		_markerControls = new THREEx.ArMarkerControls(_arToolkitContext, _camera, {
			type : 'pattern',
			patternUrl : 'assets/data/patt.hiro',
			changeMatrixMode: 'cameraTransformMatrix'
		});
		// as we do changeMatrixMode: 'cameraTransformMatrix', start with invisible scene
		_scene.visible = false;
	};
	
	
	
	
	/*
	 * 	_addPlanet: add planet on composition
	 */
	this._addPlanet = function(){
		
		var geometry	= new THREE.SphereGeometry(0.3, 30, 30);
		var material 	= _this._createPlanetMaterial();
		var sphere = new THREE.Mesh( geometry, material );
		sphere.position.y = 0.5;
		sphere.castShadow = true;
		sphere.receiveShadow = true;
		sphere.name = 'sphere';
		
		_scene.add(sphere);
		
		_onRenderFcts.push(function(delta){
			_scene.getObjectByName('sphere').rotation.y += 0.01;
		});
		
	};
	this._createPlanetMaterial = function(){
		
		var planetMaterial	= new THREE.MeshPhongMaterial();
		
		// texture pianeta
		var planetTexture 	= new THREE.ImageUtils.loadTexture(_textureMap);
		planetMaterial.map	= planetTexture;
		
		var material 	= new THREE.MeshPhongMaterial( {
			color: 0xAAAAAA,
			emissive: 0xAAAAAA,
			side: THREE.DoubleSide,
			shading: THREE.FlatShading,
		});
		
		return planetMaterial;
	};
	
	
	
	
	
	/*
	 * _addLight: add ligths to our planet
	 * 
	 */
	this._addLight = function(){
		
		var material = new THREE.MeshPhongMaterial( {
			color: 0xEEEEEE,
			emissive: 0x333333,
			side: THREE.DoubleSide,
			shading: THREE.FlatShading
		});
		var geometry = new THREE.PlaneGeometry(1, 1);
		var planeMesh = new THREE.Mesh( geometry, material);
		planeMesh.receiveShadow = true;
		planeMesh.depthWrite = false;
		planeMesh.rotation.x = -Math.PI/2;
		_scene.add(planeMesh);
	    
	    var ambient = new THREE.AmbientLight( 0x666666 );
		_scene.add( ambient );
		
		var directionalLight = new THREE.DirectionalLight( 'white' );
		directionalLight.position.set( 1, 2, 0.3 ).setLength(2);
		directionalLight.shadow.mapSize.set(128,128);
		directionalLight.shadow.camera.bottom = -0.6;
		directionalLight.shadow.camera.top = 0.6;
		directionalLight.shadow.camera.right = 0.6;
		directionalLight.shadow.camera.left = -0.6;
		directionalLight.castShadow = true;
		// scene.add(new THREE.CameraHelper( directionalLight.shadow.camera ))
		_scene.add( directionalLight );
	};
	

	
	/*
	 * 	RENDER
	 */
	this._render = function(){
		
		// render the scene
		_onRenderFcts.push(function(){
			_renderer.render( _scene, _camera );
		});
	
		// run the rendering loop
		var lastTimeMsec= null;
		requestAnimationFrame(function animate(nowMsec){
			console.log('weee');
			// keep looping
			requestAnimationFrame( animate );
			// measure time
			lastTimeMsec	= lastTimeMsec || nowMsec-1000/60;
			var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec);
			lastTimeMsec	= nowMsec;
			// call each update function
			_onRenderFcts.forEach(function(_onRenderFct){
				_onRenderFct(deltaMsec/1000, nowMsec/1000);
			});
		});
	};

	return this;

})();



