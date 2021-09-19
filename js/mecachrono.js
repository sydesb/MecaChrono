var laliste = [],lalistetempsancien = [],isVideoPlaying = false;
var nbimagesaut = 10,posxcsignanew = 0,posycsignanew = 0,tabledatatabulator = [],nbimageparsec = 50,definiechelleencours = false,echelledejadefinie = false,premierpointdefiniechelle = false,pointoriginechellex = 0,pointoriginechelley = 0,pointfinechellex = 1,pointfinechelley = 1,longueurechellereelle = 1,encourspinchcourbe = false,definiorigineencours = false,autorisationloupeconfig = true,videochargee = false,loupeaffiche = false,seekedokpourredraw = false,dejainitcanvas = false,contextgraph = [],cvgraph = [],pointoriginex = 0.03,pointoriginey = 0.97,configremiseazer = false,rayoncinit = 150,rayonc = rayoncinit,loinloupe = 2,zoom = 4,decalageloupex = 0,decalageloupey = -rayonc,afficheflechedynamique = -1,ilfautpasseralimagesuivante = false,firsttableau = true,sauvagardecanvasgraphique = [],echellex = [],echelley = [],unitey = [],unitex = [],arrayymin = [],arrayxmin = [],arrayymax = [],arrayxmax = [],contextdynamique = [],cvdynamique = [],petitesflechesdejaffichees = false,surbrillanceencours = false, pointoriginezoom, pointfinalzoom, lecvlorsduzoom, numpointbrillant = undefined,oldpointprillant = undefined,numcanvaszoomencours = undefined,lebonipourtablette = 0,intervalIDinfotime = 0,copiebooldernier = true,booleffacepoint = false,trouvepoint = false,numpointpoubell = -1,worker,margex = 0.10,margey = 0.15,largeurvw = 80,orientationrepere = 0,largeurcanvasgr = [],hauteurcanvasgr = [],lalargeurgraphique, lahauteurgraphique,fileURL, extensionaxexmaxencours = false, extensionaxexminencours = false,extensionaxeymaxencours = false,extensionaxeyminencours = false,calculxmin = 0,calculxmax = 0,calculymin = 0,calculymax = 0,calculvreelmin = 0,calculvreelmax = 0,calculamin = 0,calculamax = 0,identifianttime = 0, getA, getB = "",	getC, getD, getE,labelaxex,resolutiongraph = 2,maxdelta = 100000,mindelta = 0.0001, ongletencours = "acqui",intro,nomdelavideo, affichetooltip = false,	reglagezoomencours = false,touteslesvalue, lesvalueabscisse, lesmin, lesmax, loupevideobalise = true,brightness = 100,contrast = 100,saturate = 100,invert = 0,huerotate = 0,nbchiffreprecision = 6,nbimageparsecondedetecteeparffmpeg = -1,oldbrightness, oldcontrast, oldsaturate, oldinvert, oldhuerotate,essaienompropr = ["tremisazero", "xreel", "yreel", "vxreel", "vyreel", "vreel", "ax", "ay", "a", "Ec", "Ep", "Em"],jolinompropr = [lesphrasestraduites.tempsunite, lesphrasestraduites.xunite, lesphrasestraduites.yunite, lesphrasestraduites.vxunite, lesphrasestraduites.vyunite, lesphrasestraduites.vunite, lesphrasestraduites.axunite, lesphrasestraduites.ayunite, lesphrasestraduites.aunite, lesphrasestraduites.Ecunite, lesphrasestraduites.Epunite, lesphrasestraduites.Emunite],lesgrandeurs = [lesphrasestraduites.t, lesphrasestraduites.x, lesphrasestraduites.y, lesphrasestraduites.vx, lesphrasestraduites.vy, lesphrasestraduites.v, lesphrasestraduites.ax, lesphrasestraduites.ay, lesphrasestraduites.a, lesphrasestraduites.Ec, lesphrasestraduites.Ep, lesphrasestraduites.Em],lesunites = [lesphrasestraduites.s, lesphrasestraduites.m, lesphrasestraduites.m, lesphrasestraduites.ms, lesphrasestraduites.ms, lesphrasestraduites.ms, lesphrasestraduites.msm2, lesphrasestraduites.msm2, lesphrasestraduites.msm2, lesphrasestraduites.j, lesphrasestraduites.j, lesphrasestraduites.j],listecouleur = ['#2bf08f', '#82F0F5', '#90ee7e', '#f45b5b', '#7798BF', '#B682F5', '#ff0066', '#FF39E5', '#55BF3B', '#DF5353', '#7798BF', '#F03939'],x1touchfin, x2touchfin, y1touchfin, y2touchfin, ecartorigine, x1touch, x2touch, y1touch, y2touch, ecartnewx, ecartnewy, numdynamiquetablette,detectpinch = false,vid, cv, context, rect, letempsici, ilfautinitialisertouteslesvariables = true;
ilfautinitialisertouteslesvariables = true;
let taketime=0;

function initvariable() {
	echelledejadefinie = false;
	laliste = [];
	lalistetempsancien = [];
	isVideoPlaying = false;
	nbimagesaut = 10;
	posxcsignanew = 0;
	posycsignanew = 0;
	tabledatatabulator = [];
	nbimageparsec = 50;
	definiechelleencours = false;
	echelledejadefinie = false;
	premierpointdefiniechelle = false;
	pointoriginechellex = 0;
	pointoriginechelley = 0;
	pointfinechellex = 1;
	pointfinechelley = 1;
	longueurechellereelle = 1;
	encourspinchcourbe = false;
	definiorigineencours = false;
	videochargee = false;
	loupeaffiche = false;
	seekedokpourredraw = false;
	dejainitcanvas = false;
	petitesflechesdejaffichees = false;
	pointoriginex = 0.03;
	pointoriginey = 0.97;
	rayonc = rayoncinit;
	loinloupe = 2;
	zoom = 4;
	decalageloupex = 0;
	decalageloupey = -rayonc;
	ilfautpasseralimagesuivante = false;
	firsttableau = true;
	sauvagardecanvasgraphique = [];
	echellex = [];
	echelley = [];
	unitey = [];
	unitex = [];
	arrayymin = [];
	arrayxmin = [];
	arrayymax = [];
	arrayxmax = [];
	afficheflechedynamique = -1;
	surbrillanceencours = false;
	pointoriginezoom, pointfinalzoom, lecvlorsduzoom;
	numpointbrillant = undefined;
	oldpointprillant = undefined;
	numcanvaszoomencours = undefined;
	lebonipourtablette = 0;
	intervalIDinfotime = 0;
	copiebooldernier = true;
	booleffacepoint = false;
	trouvepoint = false;
	numpointpoubell = -1;
	margex = 0.10;
	margey = 0.15;
	orientationrepere = 0;
	largeurcanvasgr = [];
	hauteurcanvasgr = [];
	extensionaxexmaxencours = false;
	extensionaxexminencours = false;
	extensionaxeymaxencours = false;
	extensionaxeyminencours = false;
	calculxmin = 0;
	calculxmax = 0;
	calculymin = 0;
	calculymax = 0;
	calculvreelmin = 0;
	calculvreelmax = 0;
	calculamin = 0;
	calculamax = 0;
	identifianttime = 0;
	resolutiongraph = 2;
	maxdelta = 100000;
	mindelta = 0.0001;
	ongletencours = "acqui";
	affichetooltip = false, reglagezoomencours = false;
	loupevideobalise = true;
	brightness = 100;
	contrast = 100;
	saturate = 100;
	invert = 0;
	huerotate = 0;
	detectpinch = false;
}

function exportmp4() {
	window.open(fileURL);
}

function masqueloupediv() {
	ledivdeloupe = document.getElementById("divloupecapsule");
	ledivdeloupe.style.display = "none";
	loupeaffiche = false;
}

function afficheloupediv() {
	ledivdeloupe = document.getElementById("divloupecapsule");
	ledivdeloupe.style.display = "block";
	loupeaffiche = true;
}

function initvarcanvasvideo() {
	if (ilfautinitialisertouteslesvariables) initvariable();
	else ilfautinitialisertouteslesvariables = true;
	vid = document.getElementById("monfilm");
	cv = document.getElementById("cv1");
	context = cv.getContext('2d');
	vid.controls = false;
	if (loupevideobalise) {
		vidloupe = document.getElementById("monfilmloupe");
		vidloupe.controls = false;
	}
	vid.addEventListener('loadedmetadata', function() {
		progress.setAttribute('max', vid.duration);
	});
	vid.addEventListener('loadeddata', function() {
		videochargee = true;
		seekedokpourredraw = true;
		modalfps.style.display = "block";
		vid.pause();
		vid.currentTime = 0;
		pointoriginey = 0.97 / (vid.offsetWidth / vid.offsetHeight);
		browser_dims = detectdimensionbrowser();
		hvideo = vid.offsetHeight;
		aaa = hvideo / (browser_dims.height * 0.8);
		largeurvw = largeurvw / aaa;
		inittaillevideo();
		redraw();
	});
	if (loupevideobalise) {
		vidloupe.addEventListener('loadeddata', function() {
			vidloupe.pause();
			vidloupe.currentTime = 0;
		});
	}
	vid.addEventListener('timeupdate', function() {
		if (!progress.getAttribute('max')) progress.setAttribute('max', vid.duration);
		progress.value = vid.currentTime;
		progressBar.style.width = Math.floor((vid.currentTime / vid.duration) * 100) + '%';
		if (loupevideobalise)
			if (!isVideoPlaying) {
				vidloupe.currentTime = vid.currentTime;
			}
	});
	clearInterval(intervalIDinfotime);
	intervalIDinfotime = setInterval(function() {
		letempp = Math.round(vid.currentTime * 100) / 100;
		letempp = letempp.toString();
		if (letempp.indexOf(".") == -1) letempp += ".00";
		else if (letempp.split('.')[1].length == 1) letempp += "0";
		infotime.innerHTML = (letempp) + " s";
	}, 100);
	progress.addEventListener('click', function(e) {
		if (isVideoPlaying) vid.pause();
		var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
		seekedokpourredraw = false;
		vid.currentTime = pos * vid.duration;
		if (loupevideobalise) {
			vidloupe.currentTime = vid.currentTime;
		}
	});
	
	progress.addEventListener("touchmove", function(e) {
		e.preventDefault();
		var touches = e.targetTouches;
		if (touches.length == 1)  {	
			if (isVideoPlaying) vid.pause();
			var pos = ( touches[0].pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
			seekedokpourredraw = false;
			vid.currentTime = pos * vid.duration;
			if (loupevideobalise) {
				vidloupe.currentTime = vid.currentTime;
				}
		
			}
		});
	
	
	resize_canvas(vid);
	vid.addEventListener("seeked", function(e) {
		seekedokpourredraw = true;
	});
	rect = cv.getBoundingClientRect();
	cv.addEventListener('mousedown', e => {
		rect = cv.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		if (videochargee) {
			if (definiechelleencours) {
				if (echelledejadefinie) {
					oldpointoriginechellex = pointoriginechellex;
					oldpointoriginechelley = pointoriginechelley;
					oldpointfinechellex = pointfinechellex;
					oldpointfinechelley = pointfinechelley;
				}
				pointoriginechellex = x / vid.offsetWidth;
				pointoriginechelley = y / vid.offsetWidth;
				premierpointdefiniechelle = true;
			} else
			if (definiorigineencours) {
				pointoriginex = x / vid.offsetWidth;
				pointoriginey = y / vid.offsetWidth;
				definiorigineencours = false;
				if (echelledejadefinie) updatearrayetgraphique();
			} else {
				if ((!isVideoPlaying) && (seekedokpourredraw)) {
					if (!booleffacepoint) {
						letempsici = vid.currentTime;
						sortie = false;
						i = 0;
						trouvememetemps = false;
						if (laliste.length > 0)
							while (!sortie) {
								if (i < laliste.length) {
									if (((laliste[i].time - letempsici) < frameTime / 2) && ((letempsici - laliste[i].time) <= frameTime / 2)) {
										trouvememetemps = true;
										laliste[i] = {
											x: x / vid.offsetWidth,
											y: y / vid.offsetWidth,
											time: vid.currentTime,
											numframe: vid.currentTime * nbimageparsec
										};
										sortie = true;
									}
								}
								i = i + 1;
								if (i == laliste.length) sortie = true;
							}
						if (!trouvememetemps) laliste.push({
							x: x / vid.offsetWidth,
							y: y / vid.offsetWidth,
							time: vid.currentTime,
							numframe: vid.currentTime * nbimageparsec
						});
						laliste.sort(function(a, b) {
							return ((a.time < b.time) ? -1 : ((a.time == b.time) ? 0 : 1));
						});
						if (echelledejadefinie) updatearrayetgraphique();
						ilfautpasseralimagesuivante = true;
					} else if (booleffacepoint) {
						xpoubelle = x / vid.offsetWidth;
						ypoubelle = y / vid.offsetWidth;
						sortie = false;
						i = 0;
						trouvepoint = false;
						distancepoubellmin = -1;
						if (laliste.length > 0)
							while (!sortie) {
								if (i < laliste.length) {
									distancepoubell = Math.sqrt(Math.pow(laliste[i].x - xpoubelle, 2) + Math.pow(laliste[i].y - ypoubelle, 2))
									if ((distancepoubell * vid.offsetWidth) < 8) {
										trouvepoint = true;
										if ((distancepoubellmin == -1) || (distancepoubellmin > distancepoubell)) {
											distancepoubellmin = distancepoubell;
											numpointpoubell = i;
										}
									}
								}
								i = i + 1;
								if (i == laliste.length) sortie = true;
							}
						if (trouvepoint) {
							laliste.splice(numpointpoubell, 1);
							trouvepoint = false;
							updatearrayetgraphique();
						}
					}
				}
			}
		}
	});
	cv.addEventListener('mousemove', e => {
		rect = cv.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		posxcsignanew = x;
		posycsignanew = y;
		if (!isVideoPlaying) {
			loupeaffiche = true;
			if ((loupevideobalise) && (autorisationloupeconfig)) afficheloupediv();
		}
		if (booleffacepoint) {
			xpoubelle = x / vid.offsetWidth;
			ypoubelle = y / vid.offsetWidth;
			sortie = false;
			i = 0;
			trouvepoint = false;
			distancepoubellmin = -1;
			if (laliste.length > 0)
				while (!sortie) {
					if (i < laliste.length) {
						distancepoubell = Math.sqrt(Math.pow(laliste[i].x - xpoubelle, 2) + Math.pow(laliste[i].y - ypoubelle, 2))
						if ((distancepoubell * vid.offsetWidth) < 8) {
							trouvepoint = true;
							if ((distancepoubellmin == -1) || (distancepoubellmin > distancepoubell)) {
								distancepoubellmin = distancepoubell;
								numpointpoubell = i;
							}
						}
					}
					i = i + 1;
					if (i == laliste.length) sortie = true;
				}
		}
	});
	cv.addEventListener('mouseleave', e => {
		loupeaffiche = false;
		if (loupevideobalise) masqueloupediv();
		rect = cv.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		posxcsignanew = x;
		posycsignanew = y;
		if (premierpointdefiniechelle) {
			restaurevieilleechelle();
			definiechelleencours = false;
			premierpointdefiniechelle = false;
		}
	});
	cv.addEventListener('mouseup', e => {
		rect = cv.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		if (definiechelleencours) {
			pointfinechellex = x / vid.offsetWidth;
			pointfinechelley = y / vid.offsetWidth;
			if ((pointoriginechellex == pointfinechellex) && (pointoriginechelley == pointfinechelley)) {
				restaurevieilleechelle();
				premierpointdefiniechelle = false;
				alert(lesphrasestraduites.etalonzero);
			} else {
				definiechelleencours = false;
				echelledejadefinie = true;
				premierpointdefiniechelle = false;
				loupeaffiche = false;
				if (loupevideobalise) masqueloupediv();
				modal.style.display = "block";
				updatearrayetgraphique();
			}
		}
	});
	cv.addEventListener("touchstart", handleStartvideo, false);
	cv.addEventListener("touchend", handleEndvideo, false);
	cv.addEventListener("touchmove", handleMovevideo, false);
}

function analyzemessagefps(letexteffmpeg) {
	regex1 = /.*Stream.* (.*) tbr/i;
	cherchestp = letexteffmpeg.match(regex1);
	if (cherchestp != null) {
		nbimageparsecondedetecteeparffmpeg = parseFloat(cherchestp[1]);
		document.getElementById("idfps").value = nbimageparsecondedetecteeparffmpeg;
	}
}
(function localFileVideoPlayer(win) {
	var URL = window.URL || window.webkitURL;
	const messageRatio = document.getElementById('ratioTranscode');
	const {
		createWorker
	} = FFmpeg;
	worker = createWorker({
		corePath: './lib/ffmpeg/ffmpeg-core.js',
		logger: ({
			message
		}) => analyzemessagefps(message),
		progress: ({
			ratio
		}) => {
			messageRatio.innerHTML = ` ${(ratio * 100.0).toFixed(2)}%`;
		},
	});
	var playSelectedFile = async ({
		target: {
			files
		}
	}) => {
		var vCon = document.getElementById('videoCont');
		var file = files[0];
		var type = file.type;
		nomdelavideo = file.name;
		if (nomdelavideo.indexOf(" ") == -1) {
			var oldVid = document.getElementById('monfilm');
			if (loupevideobalise) oldVidloupe = document.getElementById('divloupecapsule');
			var oldCanvasid = document.getElementById('cv1');
			try {
				if (loupevideobalise) vCon.removeChild(oldVidloupe);
				vCon.removeChild(oldCanvasid);
				vCon.removeChild(oldVid);
			} catch (e) {
				console.log("erreur removechild" + e.message);
			}
			var videoNode = document.createElement('video');
			if (loupevideobalise) {
				divcapsuleloupe = document.createElement('div');
				videoNodeloupe = document.createElement('video');
			}
			var canvasNode = document.createElement('canvas');
			var canPlay = videoNode.canPlayType(type);
			if (canPlay === '') canPlay = 'no';
			var message = 'Problème "' + type + '": ' + canPlay;
			var isError = canPlay === 'no';
			if (getE[3] == "1") isError = true;
			if (!isError) {
				fileURL = URL.createObjectURL(file);
			}
			if (isError) {
				modalTranscode.style.display = "block";
				document.getElementById('idupload').style.display = "none";
				document.getElementById('idnewoneaprestranscode').style.display = "inline-block";
				const messageT = document.getElementById('messageTranscode');
				const {
					name
				} = files[0];
				messageT.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + lesphrasestraduites.chargebibli + '.<br> ';
				worker.onmessage = function(event) {
					var result = event.data;
					console.log(result);
				};
				await worker.load();
				await worker.write(name, files[0]);
				messageT.innerHTML = lesphrasestraduites.conversion + ' ' + (type.replace("video/", "")) + ' -> ' + lesphrasestraduites.mp4 + ' : <i class="fas fa-sun fa-spin"></i> ';
				await worker.transcode(name, 'output.mp4');
				messageT.innerHTML = lesphrasestraduites.finconv;
				const {
					data
				} = await worker.read('output.mp4');
				const video = document.getElementById('output-video');
				fileURL = URL.createObjectURL(new Blob([data.buffer], {
					type: 'video/mp4'
				}));
				await worker.terminate();
				modalTranscode.style.display = "none";
				if (document.getElementById("sauvemp4").checked == true) {
					let a8 = document.createElement('a');
					a8.href = fileURL
					a8.download = name + '.mp4';
					document.body.appendChild(a8);
					a8.click();
					document.body.removeChild(a8);
				}
			}
			modalnomvideoprojet.style.display = "none";
			document.getElementById('moncontainer').style.display = "block";
			document.getElementById('infotime').style.display = "block";
			document.getElementById('infofps').style.display = "block";
			canvasNode.id = 'cv1';
			canvasNode.class = 'canvas';
			videoNode.id = 'monfilm';
			videoNode.src = fileURL;
			videoNode.controls = 'false';
			videoNode.autoplay = 'false';
			if (loupevideobalise) {
				videoNodeloupe.id = 'monfilmloupe';
				videoNodeloupe.src = fileURL;
				videoNodeloupe.controls = 'false';
				videoNodeloupe.autoplay = 'false';
				divcapsuleloupe.id = 'divloupecapsule';
				divcapsuleloupe.class = 'capsuleloupe';
			}
			vCon.appendChild(videoNode);
			if (loupevideobalise) {
				vCon.appendChild(divcapsuleloupe);
				vConloupe = document.getElementById('divloupecapsule');
				vConloupe.appendChild(videoNodeloupe);
				masqueloupediv();
			}
			vCon.appendChild(canvasNode);
			initvarcanvasvideo();
			resize_canvas(vid);
			if (laliste.length > 0) updatearrayetgraphique();
		} else alert(lesphrasestraduites.pasdespace);
	}
	var inputNode = document.getElementById("idinputupload");
	inputNode.addEventListener('change', playSelectedFile, false);
	var inputNodeprojet = document.getElementById("idinputuploadprojet");
	inputNodeprojet.addEventListener('change', playSelectedFile, false);
})(window)
var affichagevaleurgraphtooltip = document.getElementById("valeurgraph");
var modalfps = document.getElementById("myModalfps");
var modalTranscode = document.getElementById("myModalTranscode");
var validTranscode = document.getElementById("validTranscode");
var closeTranscode = document.getElementById("closeTranscode");
var modalcontraste = document.getElementById("myModalcontraste");
var closecaptureecran = document.getElementById("closecaptureecran");
var modalcaptureecran = document.getElementById("myModalcaptureecran");
var btnfps = document.getElementById("idfps");
var btnvalidfps = document.getElementById("validfps");
var spanfps = document.getElementById("closefps");
var closecontrast = document.getElementById("closecontrast");
var validcontraste = document.getElementById("validcontraste");
var validcaptureecran = document.getElementById("validcaptureecran");
var infofps = document.getElementById("infofps");
var infotime = document.getElementById("infotime");
var modalnomvideoprojet = document.getElementById("Modalnomvideoprojet");
modalnomvideoprojet.style.display = "none";
const resetcontraste = document.getElementById("resetcontraste");
const luminoslid = document.getElementById("luminosite");
const contrasslid = document.getElementById("Constraste");
const saturslid = document.getElementById("Saturation");
const invertslid = document.getElementById("Inversion");
const huerotateslide = document.getElementById("Decalage");

function updateFilters() {
	vid.style.filter = "brightness(" + brightness + "%) contrast(" + contrast + "%) saturate(" + saturate + "%) invert(" + invert + "%) hue-rotate(" + huerotate + "deg) ";
	vidloupe.style.filter = "brightness(" + brightness + "%) contrast(" + contrast + "%) saturate(" + saturate + "%) invert(" + invert + "%) hue-rotate(" + huerotate + "deg) ";
}
resetcontraste.addEventListener("click", function() {
	brightness = 100;
	luminoslid.value = 100;
	contrast = 100;
	contrasslid.value = 100;
	saturate = 100;
	saturslid.value = 100;
	invert = 0;
	invertslid.value = 0;
	huerotate = 0;
	huerotateslide.value = 0;
	updateFilters();
});
luminoslid.addEventListener("input", function() {
	brightness = luminoslid.value;
	updateFilters();
});
contrasslid.addEventListener("input", function() {
	contrast = contrasslid.value;
	updateFilters();
});
saturslid.addEventListener("input", function() {
	saturate = saturslid.value;
	updateFilters();
});
invertslid.addEventListener("input", function() {
	invert = invertslid.value;
	updateFilters();
});
huerotateslide.addEventListener("input", function() {
	huerotate = huerotateslide.value;
	updateFilters();
});

function lumicontraste() {
	modalcontraste.style.display = "block";
	definiechelleencours = false;
	oldbrightness = brightness;
	oldcontrast = contrast;
	oldsaturate = saturate;
	oldinvert = invert;
	oldhuerotate = huerotate;
}

function prendsvaleurtemps() {
	nbimageparsec = parseFloat(document.getElementById('idfps').value.replace(/,/g, "."));
	if (isNaN(nbimageparsec)) nbimageparsec = 25;
	nbimagesaut = parseInt(document.getElementById('idnbimdeux').value);
	if (isNaN(nbimagesaut)) nbimagesaut = 5;
	frameTime = 1 / nbimageparsec;
	infofps.innerHTML = lesphrasestraduites.echantill + " " + nbimagesaut + " " + lesphrasestraduites.image + " / " + nbimageparsec + " " + lesphrasestraduites.ips;
	infofps.style.display = "block";
	infotime.style.display = "block";
	infofps.style.right = document.getElementById("monfilm").offsetLeft + 'px';;
	infotime.style.left = document.getElementById("monfilm").offsetLeft + 'px';
}
infofps.onclick = function() {
	document.getElementById('idfps').value = nbimageparsec;
	modalfps.style.display = "block";
}
spanfps.onclick = function() {
	modalfps.style.display = "none";
	infofps.style.display = "block";
}
closecontrast.onclick = function() {
	brightness = oldbrightness;
	luminoslid.value = brightness;
	contrast = oldcontrast;
	contrasslid.value = contrast;
	saturate = oldsaturate;
	saturslid.value = saturate;
	invert = oldinvert;
	invertslid.value = invert;
	huerotate = oldhuerotate;
	huerotateslide.value = huerotate;
	updateFilters();
	modalcontraste.style.display = "none";
}
closecaptureecran.onclick = function() {
	modalcaptureecran.style.display = "none";
}
validcontraste.onclick = function() {
	modalcontraste.style.display = "none";
}
validcaptureecran.onclick = function() {
	modalcaptureecran.style.display = "none";
	screencap();
}
btnvalidfps.onclick = function() {
	prendsvaleurtemps();
	modalfps.style.display = "none";
}

function ShowPresentation() {
	document.getElementById('idpresentation').style.display = "block";
}
var videoControls = document.getElementById('video-controls');
videoControls.setAttribute('data-state', 'visible');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');
var supportsProgress = (document.createElement('progress').max !== undefined);
if (!supportsProgress) progress.setAttribute('data-state', 'fake');

function playVid() {
	if (!isVideoPlaying) {
		vid.play();
		isVideoPlaying = true;
		document.getElementById("btplay").innerHTML = '<i class="fas fa-equals fa-2x" data-fa-transform="rotate-90"></i>';
	} else {
		vid.pause();
		vid.currentTime = Math.round((vid.currentTime) / frameTime) * frameTime;
		isVideoPlaying = false;
		if (loupevideobalise) {
			vidloupe.pause();
			vidloupe.currentTime = vid.currentTime;
		}
		document.getElementById("btplay").innerHTML = '<i class="fas fa-play  fa-2x"></i>';
	}
}

function pauseVid() {
	vid.pause();
	vid.currentTime = Math.round((vid.currentTime) / frameTime) * frameTime;
	if (loupevideobalise) {
		vidloupe.pause();
		vidloupe.currentTime = vid.currentTime;
	}
}

function retourdebut() {
	vid.pause();
	vid.currentTime = 0;
	if (loupevideobalise) {
		vidloupe.pause();
		vidloupe.currentTime = vid.currentTime;
	}
}

function resize_canvas(element) {
	var w = element.offsetWidth;
	var h = element.offsetHeight;
	cv.width = w;
	cv.height = h;
	cv.style.position = "absolute";
	cv.style.left = vid.offsetLeft + 'px';
	cv.style.top = vid.offsetTop + 'px';
}
frameTime = 1 / nbimageparsec;

function moinsframe() {
	seekedokpourredraw = false;
	vid.currentTime = Math.max(0, Math.round((vid.currentTime - frameTime) / frameTime) * frameTime);
}

function plusframe() {
	seekedokpourredraw = false;
	vid.currentTime = Math.min(vid.duration, Math.round((vid.currentTime + frameTime) / frameTime) * frameTime);
}

function enregistrepre() {
	seekedokpourredraw = false;
	sortie = false;
	i = 0;
	trouvetard = false;
	encemoment = vid.currentTime - frameTime / 2;
	if (laliste.length > 0) {
		i = laliste.length - 1;
		while (!sortie) {
			if (i >= 0) {
				if (encemoment > laliste[i].time) {
					sortie = true;
					trouvetard = true;
				}
			} else sortie = true;
			if (!sortie) i = i - 1;
		}
	}
	if ((trouvetard)) {
		vid.currentTime = laliste[i].time;
	} else vid.currentTime = Math.max(0, Math.round((vid.currentTime - nbimagesaut * frameTime) / frameTime) * frameTime);
}

function enregistresuiv() {
	seekedokpourredraw = false;
	sortie = false;
	i = 0;
	trouvetard = false;
	encemoment = vid.currentTime + frameTime / 2;
	if (laliste.length > 0)
		while (!sortie) {
			if (i < laliste.length) {
				if (encemoment < laliste[i].time) {
					sortie = true;
					trouvetard = true;
				}
			} else sortie = true;
			if (!sortie) i = i + 1;
		}
	if ((trouvetard)) {
		vid.currentTime = laliste[i].time;
	} else vid.currentTime = Math.min(vid.duration, Math.round((vid.currentTime + nbimagesaut * frameTime) / frameTime) * frameTime);
}

function drawLine(context, x1, y1, x2, y2) {
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth = 1;
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	context.closePath();
}

function croixoblique(x, y, epaisseur, couleur) {
	context.beginPath();
	context.lineWidth = epaisseur;
	context.strokeStyle = couleur;
	context.moveTo(x - 20, y - 20);
	context.lineTo(x + 20, y + 20);
	context.moveTo(x + 20, y - 20);
	context.lineTo(x - 20, y + 20);
	context.stroke();
	context.lineWidth = epaisseur;
}

function croixhoriz(x, y, epaisseur, couleur) {
	context.save();
	context.beginPath();
	context.lineWidth = epaisseur;
	context.strokeStyle = couleur;
	context.moveTo(x, y - 10);
	context.lineTo(x, y + 10);
	context.moveTo(x - 10, y);
	context.lineTo(x + 10, y);
	context.stroke();
	context.lineWidth = epaisseur;
	context.restore();
}

function unecroix(x, y,position,total) {
	if (getE[5] == "1"){				
		intensite=1;
		intensite=intensite-(total-position)*0.1;
		if(intensite<0.2) intensite=0.2;
		}
		else intensite=1;
	context.save();
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = 'rgba(255,255,255,'+0.8*intensite+')';
	context.arc(x, y, 2, 0, 6.283);
	context.stroke();
	context.restore();
	context.save();
	context.beginPath();
	context.strokeStyle = 'rgba(255,100,100,'+intensite+')';
	context.lineWidth = 3;
	context.arc(x, y, 4, 0, 6.283);
	context.stroke();
	context.restore();
	context.save();
	context.beginPath();
	context.strokeStyle = 'rgba(255,255,255,'+intensite+')';
	context.lineWidth = 1;
	context.arc(x, y, 6, 0, 6.283);
	context.stroke();
	context.restore();
}

function unecroixpoubelle(x, y) {
	context.save();
	context.beginPath();
	context.strokeStyle = 'rgba(100,100,255,1)';
	context.lineWidth = 3;
	context.arc(x, y, 4, 0, 6.283);
	context.stroke();
	context.restore();
}

function unecroixbleue(x, y) {
	croixhoriz(x, y, 4, "blue");
	croixhoriz(x, y, 1, "black");
}

function unecroixbl(x, y) {
	temps = Math.round(performance.now()) / 1000;
	virgule = temps - Math.trunc(temps);
	context.save();
	context.beginPath();
	context.lineWidth = 0.5;
	context.strokeStyle = 'rgba(255,100,100,' + 1 * (1. - virgule / 2) + ')';
	context.moveTo(x - 2.2, y);
	context.lineTo(x - 0.3, y);
	context.moveTo(x + 0.3, y);
	context.lineTo(x + 2.2, y);
	context.moveTo(x, y - 2.2);
	context.lineTo(x, y - 0.3);
	context.moveTo(x, y + 0.2);
	context.lineTo(x, y + 2.2);
	context.stroke();
	context.restore();
	context.save();
	context.beginPath();
	context.strokeStyle = 'rgba(255,255,255,' + 1 * (1. - virgule / 2) + ')';
	context.lineWidth = 2 + virgule * 4;
	context.arc(x, y, 4 + virgule * 2, 0, 6.283);
	context.stroke();
	context.restore();
	context.save();
	context.beginPath();
	context.strokeStyle = 'rgba(255,100,100,' + 1 * (1. - virgule / 2) + ')';
	context.lineWidth = 0.6;
	context.arc(x, y, 7 + virgule * 4, 0, 6.283);
	context.stroke();
	context.restore();
	context.save();
	context.beginPath();
	context.strokeStyle = 'rgba(255,150,150,' + 0.6 * (1. - virgule) + ')';
	context.lineWidth = 0.6;
	context.arc(x, y, 10 + virgule * 4, 0, 6.283);
	context.stroke();
	context.restore();
}

function effacepoint() {
	definiechelleencours = false;
	if (booleffacepoint) {
		booleffacepoint = false;
		document.getElementById("effacepoint").innerHTML = '<i class="fas fa-trash-alt"></i>';
		document.getElementById("cv1").style.cssText += 'cursor:crosshair;';
	} else {
		booleffacepoint = true;
		document.getElementById("effacepoint").innerHTML = '<i class="fas fa-bullseye"></i>';
		document.getElementById("cv1").style.cssText += 'cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAYAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAABgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAMAAAAFQAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAVAAAADAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAABwAAAAvAAAAOAAAADgAAAA4AAAAOAAAADgAAAA4AAAAOAAAAC8AAAAcAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAALAAAAEUAAABMAAAATAAAAEwAAABMAAAATAAAAEwAAABMAAAARQAAACwAAAATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAFMAAABRAAAANQAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/AAAA/wAAAFQAAAA4AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+oqKj/AAAA/6ioqP8AAAD/qKio/wAAAP+oqKj/AAAA/6ioqP8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6ioqP8AAAD/qKio/wAAAP+oqKj/AAAA/6ioqP8AAAD/qKio/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/qKio/wAAAP+oqKj/AAAA/6ioqP8AAAD/qKio/wAAAP+oqKj/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+oqKj/AAAA/6ioqP8AAAD/qKio/wAAAP+oqKj/AAAA/6ioqP8AAAD/AAAAVQAAADkAAAAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6ioqP8AAAD/qKio/wAAAP+oqKj/AAAA/6ioqP8AAAD/qKio/wAAAP8AAABVAAAAOwAAAB8AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/qKio/wAAAP+oqKj/AAAA/6ioqP8AAAD/qKio/wAAAP+oqKj/AAAA/wAAAFUAAABCAAAAJQAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAwAAAP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP8AAAD/AAAAVAAAAEcAAAAsAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAMAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAABPAAAAQwAAACkAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/qKio/wAAAP8AAAAuAAAAHAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXAAAA/6ioqP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/qKio/6ioqP+oqKj/AAAA/wAAABUAAAAMAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAABIAAAAiAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAYAAAABgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAABIAAAAZAAAAEAAAAP8AAAAKAAAAEQAAABcAAAAVAAAAFQAAAP8AAAAXAAAAEQAAAAoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAAgAAAAFAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAcAAAAFAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////////////////////////////////////////////////////////wB///4AP//+AD///gA///4AP//+AD///gA///4AP//+AD///gA///wAH//8AB//9gA///O+///xgP//8="),auto;';
	}
	sortie = false;
	i = 0;
	trouvetard = false;
	encemoment = vid.currentTime;
}

function traceviseur(lex, ley) {
	context.save();
	context.beginPath();
	context.globalCompositeOperation = 'difference';
	context.moveTo(lex - 8, ley);
	context.lineTo(lex + 8, ley);
	context.moveTo(lex, ley - 8);
	context.lineTo(lex, ley + 8);
	context.lineWidth = 1;
	context.strokeStyle = "black";
	context.stroke();
	context.globalCompositeOperation = 'destination-over';
	context.moveTo(lex - 8, ley);
	context.lineTo(lex + 8, ley);
	context.moveTo(lex, ley - 8);
	context.lineTo(lex, ley + 8);
	context.lineWidth = 0.5;
	context.strokeStyle = "white";
	context.stroke();
	context.globalCompositeOperation = 'difference';
	if (booleffacepoint) {
		dexapoubellex = 8;
		dexapoubelley = 8;
		context.moveTo(lex + dexapoubellex, dexapoubelley + ley);
		context.lineTo(lex + dexapoubellex + 10, dexapoubelley + ley);
		context.moveTo(lex + dexapoubellex + 4, dexapoubelley + ley - 1);
		context.lineTo(lex + dexapoubellex + 6, dexapoubelley + ley - 1);
		context.moveTo(lex + dexapoubellex + 1, dexapoubelley + ley + 3);
		context.lineTo(lex + dexapoubellex + 9, dexapoubelley + ley + 3);
		context.moveTo(lex + dexapoubellex + 1, dexapoubelley + ley + 13);
		context.lineTo(lex + dexapoubellex + 9, dexapoubelley + ley + 13);
		context.moveTo(lex + dexapoubellex + 1, dexapoubelley + ley + 3);
		context.lineTo(lex + dexapoubellex + 1, dexapoubelley + ley + 13);
		context.moveTo(lex + dexapoubellex + 9, dexapoubelley + ley + 3);
		context.lineTo(lex + dexapoubellex + 9, dexapoubelley + ley + 13);
		context.moveTo(lex + dexapoubellex + 3, dexapoubelley + ley + 3);
		context.lineTo(lex + dexapoubellex + 3, dexapoubelley + ley + 13);
		context.moveTo(lex + dexapoubellex + 7, dexapoubelley + ley + 3);
		context.lineTo(lex + dexapoubellex + 7, dexapoubelley + ley + 13);
	}
	context.lineWidth = 0.5;
	context.strokeStyle = "white";
	context.stroke();
	context.restore();
}
function effacecentre(){
	context.save();
	rayoncentre=30;
	context.beginPath();
	context.globalCompositeOperation = 'destination-out';
	deltatimealpha=Math.round(performance.now())-taketime;
	deltatimealpha=deltatimealpha/800;
	if(deltatimealpha>1) deltatimealpha=1;
	if(deltatimealpha<0) deltatimealpha=0;
	var radgrad = context.createRadialGradient(posxcsignanew,posycsignanew,0,posxcsignanew,posycsignanew,rayoncentre);
	radgrad.addColorStop(0, 'rgba(255,0,0,'+deltatimealpha*0.8+')');
	radgrad.addColorStop(0.6, 'rgba(255,0,0,'+deltatimealpha*0.6+')');
	radgrad.addColorStop(1, 'rgba(255,0,0,0)');
	context.fillStyle = radgrad;
	context.arc(posxcsignanew, posycsignanew, rayoncentre, 0, Math.PI*2);
	context.fill();
	context.restore();
}

function loupe() {
	vidpourloupe = document.getElementById("monfilm");
	copiebool = true;
	decalageactif = false;
	if (getE[0] == "0") {
		decalageloupex = 0;
		decalageloupey = 0;
	}
	xdm = cv.width / 2;
	ydm = cv.height / 2;
	if (getE[0] == "1") {
		decalageactif = true;
		if (ydm - posycsignanew != 0) {
			{
				gamcarre = Math.pow(xdm - posxcsignanew, 2) / Math.pow(ydm - posycsignanew, 2);
				decalageloupey = Math.pow(rayonc * rayonc * loinloupe / (1 + gamcarre), 0.5);
				decalageloupex = Math.pow(rayonc * rayonc * loinloupe / (1 + 1 / (gamcarre)), 0.5);
				if (posxcsignanew > xdm) decalageloupex = -decalageloupex;
				if (posycsignanew > ydm) decalageloupey = -decalageloupey;
			}
		}
	}
	echellevideox = vidpourloupe.offsetWidth / vidpourloupe.videoWidth;
	echellevideoy = vidpourloupe.offsetHeight / vidpourloupe.videoHeight;
	if (!loupevideobalise) {
		context.save();
		context.beginPath();
		context.arc(posxcsignanew + decalageloupex, posycsignanew + decalageloupey, rayonc - 2, 0, 2 * Math.PI, true);
		context.clip();
		try {
			if (copiebooldernier) context.fillRect(posxcsignanew - rayonc + decalageloupex, posycsignanew - rayonc + decalageloupey, rayonc * 2, rayonc * 2);
			context.drawImage(vidpourloupe, (posxcsignanew - rayonc / zoom) / echellevideox, (posycsignanew - rayonc / zoom) / echellevideoy, (rayonc * 2 / echellevideox) / zoom, (rayonc * 2 / echellevideoy) / zoom, posxcsignanew - rayonc + decalageloupex, posycsignanew - rayonc + decalageloupey, rayonc * 2, rayonc * 2);
		} catch (e) {
			console.log(lesphrasestraduites.erreurcopie + " " + e.message);
			copiebool = false;
		}
		copiebooldernier = copiebool;
	} else {
		context.save();
		context.beginPath();
		context.arc(posxcsignanew + decalageloupex, posycsignanew + decalageloupey, rayonc - 2, 0, 2 * Math.PI);
		context.closePath();
		context.clip();
		context.clearRect(0, 0, vid.offsetWidth, vid.offsetHeight);
		vidloupe.style.left = (-1 * posxcsignanew * 4 + rayonc * 4 / zoom) + 'px';
		vidloupe.style.top = (-1 * posycsignanew * 4 + rayonc * 4 / zoom) + 'px';
		vConloupe.style.left = (1 * posxcsignanew - rayonc + vid.offsetLeft + decalageloupex) + 'px';
		vConloupe.style.top = (1 * posycsignanew - rayonc + vid.offsetTop + decalageloupey) + 'px';
		context.stroke();
	}
	if (copiebool) {
		context.translate(decalageloupex, decalageloupey);
		context.translate(posxcsignanew, posycsignanew);
		context.scale(zoom, zoom);
		context.translate(-posxcsignanew, -posycsignanew);
		drawSplinesloupe();
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 2;
		context.shadowColor = 'rgba(255,255,255, 1)';
		context.stroke();
		letempsila = vidpourloupe.currentTime;
		for (i = 0; i < laliste.length; i++) {
			if (letempsila >= laliste[i].time) {
				if (((laliste[i].time - letempsila) < frameTime / 2) && ((letempsila - laliste[i].time) <= frameTime / 2)) unecroixbl(laliste[i].x * vidpourloupe.offsetWidth, laliste[i].y * vidpourloupe.offsetWidth);
				else unecroix(laliste[i].x * vidpourloupe.offsetWidth, laliste[i].y * vidpourloupe.offsetWidth);
				if ((trouvepoint) && (booleffacepoint) && (numpointpoubell == i)) {
					unecroixpoubelle(laliste[numpointpoubell].x * vid.offsetWidth, laliste[numpointpoubell].y * vid.offsetWidth);
				}
			}
		}
		if (getE[6] == "1") if(!booleffacepoint)effacecentre();
		traceechelle();
		tracerepere();
		if (decalageactif) traceviseur(posxcsignanew, posycsignanew);
	}
	context.restore();
	if (copiebool) {
		context.beginPath();
		context.arc(posxcsignanew + decalageloupex, posycsignanew + decalageloupey, rayonc + 2, 0, 2 * Math.PI);
		context.lineWidth = 2;
		context.strokeStyle = "grey";
		context.stroke();
		context.beginPath();
		context.arc(posxcsignanew + decalageloupex, posycsignanew + decalageloupey, rayonc, 0, 2 * Math.PI);
		context.lineWidth = 4;
		context.strokeStyle = 'rgba(255, 255,255, 0.5)';
		context.stroke();
	}
}

function handleStartvideo(evt) {
	evt.preventDefault();
	var touches = evt.targetTouches;
	if (touches.length == 1) {
		rect = evt.target.getBoundingClientRect();
		var bodyRect = document.body.getBoundingClientRect();
		x = touches[0].pageX - (rect.left - bodyRect.left);
		y = touches[0].pageY - (rect.top - bodyRect.top);
		if (videochargee) {
			if (definiechelleencours) {
				if (echelledejadefinie) {
					oldpointoriginechellex = pointoriginechellex;
					oldpointoriginechelley = pointoriginechelley;
					oldpointfinechellex = pointfinechellex;
					oldpointfinechelley = pointfinechelley;
				}
				if (!premierpointdefiniechelle) {
					identifiantpremierpointechelle = touches[0].identifier;
					premierpointdefiniechelle = true;
				}
				pointoriginechellex = x / vid.offsetWidth;
				pointoriginechelley = y / vid.offsetWidth;
				posxcsignanew = x;
				posycsignanew = y;
			} else
			if (definiorigineencours) {
				pointoriginex = x / vid.offsetWidth;
				pointoriginey = y / vid.offsetWidth;
			} else {
				if ((!isVideoPlaying) && (seekedokpourredraw)) {
					posxcsignanew = x;
					posycsignanew = y;
					if (!isVideoPlaying) {
						loupeaffiche = true;
						if ((loupevideobalise) && (autorisationloupeconfig)) afficheloupediv();
					}
					if (!booleffacepoint) {
						letempsici = vid.currentTime;
						sortie = false;
						i = 0;
						trouvememetemps = false;
						if (laliste.length > 0)
							while (!sortie) {
								if (i < laliste.length) {
									if (((laliste[i].time - letempsici) < frameTime / 2) && ((letempsici - laliste[i].time) <= frameTime / 2)) {
										trouvememetemps = true;
										lebonipourtablette = i;
										laliste[i] = {
											x: x / vid.offsetWidth,
											y: y / vid.offsetWidth,
											time: vid.currentTime,
											numframe: vid.currentTime * nbimageparsec
										};
										taketime=performance.now();	
										sortie = true;
									}
								}
								i = i + 1;
								if (i == laliste.length) sortie = true;
							}
						if (!trouvememetemps) {
							laliste.push({
								x: x / vid.offsetWidth,
								y: y / vid.offsetWidth,
								time: vid.currentTime,
								numframe: vid.currentTime * nbimageparsec
							});
							taketime=performance.now();	
							lebonipourtablette = laliste.length - 1;
						}
						laliste.sort(function(a, b) {
							return ((a.time < b.time) ? -1 : ((a.time == b.time) ? 0 : 1));
						});
					} else if (booleffacepoint) {
						xpoubelle = x / vid.offsetWidth;
						ypoubelle = y / vid.offsetWidth;
						sortie = false;
						i = 0;
						trouvepoint = false;
						distancepoubellmin = -1;
						if (laliste.length > 0)
							while (!sortie) {
								if (i < laliste.length) {
									distancepoubell = Math.sqrt(Math.pow(laliste[i].x - xpoubelle, 2) + Math.pow(laliste[i].y - ypoubelle, 2))
									if ((distancepoubell * vid.offsetWidth) < 41) {
										trouvepoint = true;
										if ((distancepoubellmin == -1) || (distancepoubellmin > distancepoubell)) {
											distancepoubellmin = distancepoubell;
											numpointpoubell = i;
										}
									}
								}
								i = i + 1;
								if (i == laliste.length) sortie = true;
							}
					}
					if (echelledejadefinie) updatearrayetgraphique();
				}
			}
		}
	} else {
		rect = evt.target.getBoundingClientRect();
		var bodyRect = document.body.getBoundingClientRect();
		if (videochargee) {
			if (definiechelleencours) {
				if (!premierpointdefiniechelle) {
					identifiantpremierpointechelle = touches[0].identifier;
					premierpointdefiniechelle = true;
				}
				for (var i = 0; i < touches.length; i++) {
					if (touches[i].identifier == identifiantpremierpointechelle) {
						pointoriginechellex = (touches[i].pageX - (rect.left - bodyRect.left)) / vid.offsetWidth;
						pointoriginechelley = (touches[i].pageY - (rect.top - bodyRect.top)) / vid.offsetWidth;
					} else {
						posxcsignanew = touches[i].pageX - (rect.left - bodyRect.left);
						posycsignanew = touches[i].pageY - (rect.top - bodyRect.top);
					}
				}
				premierpointdefiniechelle = true;
			}
		}
	}
}

function handleMovevideo(evt) {
	evt.preventDefault();
	var touches = evt.targetTouches;
	if ((touches.length == 1) && (!definiechelleencours)) {
		rect = evt.target.getBoundingClientRect();
		var bodyRect = document.body.getBoundingClientRect();
		x = touches[0].pageX - (rect.left - bodyRect.left);
		y = touches[0].pageY - (rect.top - bodyRect.top);
		if (videochargee) {
			if (definiorigineencours) {
				pointoriginex = x / vid.offsetWidth;
				pointoriginey = y / vid.offsetWidth;
			} else {
				if ((!isVideoPlaying) && (seekedokpourredraw)) {
					posxcsignanew = x;
					posycsignanew = y;
					if (!isVideoPlaying) {
						loupeaffiche = true;
						if ((loupevideobalise) && (autorisationloupeconfig)) afficheloupediv();
					}
					if (!booleffacepoint) {
						letempsici = vid.currentTime;
						sortie = false;
						i = 0;
						trouvememetemps = false;
						if (laliste.length > 0) {laliste[lebonipourtablette] = {
											x: x / vid.offsetWidth,
											y: y / vid.offsetWidth,
											time: vid.currentTime,
											numframe: vid.currentTime * nbimageparsec
										};
									 taketime=performance.now();	
									}
					} else if (booleffacepoint) {
						xpoubelle = x / vid.offsetWidth;
						ypoubelle = y / vid.offsetWidth;
						sortie = false;
						i = 0;
						trouvepoint = false;
						distancepoubellmin = -1;
						if (laliste.length > 0)
							while (!sortie) {
								if (i < laliste.length) {
									distancepoubell = Math.sqrt(Math.pow(laliste[i].x - xpoubelle, 2) + Math.pow(laliste[i].y - ypoubelle, 2))
									if ((distancepoubell * vid.offsetWidth) < 41) {
										trouvepoint = true;
										if ((distancepoubellmin == -1) || (distancepoubellmin > distancepoubell)) {
											distancepoubellmin = distancepoubell;
											numpointpoubell = i;
										}
									}
								}
								i = i + 1;
								if (i == laliste.length) sortie = true;
							}
					}
				}
			}
		}
	}
	if ((definiechelleencours) && ((videochargee))) {
		rect = evt.target.getBoundingClientRect();
		var bodyRect = document.body.getBoundingClientRect();
		if (!premierpointdefiniechelle) {
			identifiantpremierpointechelle = touches[0].identifier;
			premierpointdefiniechelle = true;
		}
		for (var i = 0; i < touches.length; i++) {
			if (touches[i].identifier == identifiantpremierpointechelle) {
				pointoriginechellex = (touches[i].pageX - (rect.left - bodyRect.left)) / vid.offsetWidth;
				pointoriginechelley = (touches[i].pageY - (rect.top - bodyRect.top)) / vid.offsetWidth;
			} else {
				posxcsignanew = touches[i].pageX - (rect.left - bodyRect.left);
				posycsignanew = touches[i].pageY - (rect.top - bodyRect.top);
				pointfinechellex = posxcsignanew / vid.offsetWidth;
				pointfinechelley = posycsignanew / vid.offsetWidth;
			}
		}
	}
}

function handleEndvideo(evt) {
	evt.preventDefault();
	var touches = evt.targetTouches;
	if (videochargee) {
		if (definiechelleencours) {
			if (touches.length == 0) {
				definiechelleencours = false;
				echelledejadefinie = true;
				premierpointdefiniechelle = false;
				loupeaffiche = false;
				if (loupevideobalise) masqueloupediv();
				modal.style.display = "block";
			} else {
				rect = evt.target.getBoundingClientRect();
				bodyRect = document.body.getBoundingClientRect();
				for (var i = 0; i < touches.length; i++) {
					if (touches[i].identifier == identifiantpremierpointechelle) {
						pointoriginechellex = (touches[i].pageX - (rect.left - bodyRect.left)) / vid.offsetWidth;
						pointoriginechelley = (touches[i].pageY - (rect.top - bodyRect.top)) / vid.offsetWidth;
					} else {
						posxcsignanew = touches[i].pageX - (rect.left - bodyRect.left);
						touches[i].pageY - (rect.top - bodyRect.top);
						pointfinechellex = posxcsignanew / vid.offsetWidth;
						pointfinechelley = posycsignanew / vid.offsetWidth;
					}
				}
			}
			if (echelledejadefinie) updatearrayetgraphique();
		} else
		if (definiorigineencours) {
			pointoriginex = x / vid.offsetWidth;
			pointoriginey = y / vid.offsetWidth;
			definiorigineencours = false;
			if (echelledejadefinie) updatearrayetgraphique();
		} else {
			if ((!isVideoPlaying) && (seekedokpourredraw)) {
				posxcsignanew = x;
				posycsignanew = y;
				loupeaffiche = false;
				if (loupevideobalise) masqueloupediv();
				if (!booleffacepoint) {
					letempsici = vid.currentTime;
					sortie = false;
					i = 0;
					trouvememetemps = false;
					if (laliste.length > 0) {laliste[lebonipourtablette] = {
									x: x / vid.offsetWidth,
									y: y / vid.offsetWidth,
									time: vid.currentTime,
									numframe: vid.currentTime * nbimageparsec
									};
								 taketime=performance.now();	
								}
					ilfautpasseralimagesuivante = true;
				} else if (booleffacepoint) {
					xpoubelle = x / vid.offsetWidth;
					ypoubelle = y / vid.offsetWidth;
					sortie = false;
					i = 0;
					trouvepoint = false;
					distancepoubellmin = -1;
					if (laliste.length > 0)
						while (!sortie) {
							if (i < laliste.length) {
								distancepoubell = Math.sqrt(Math.pow(laliste[i].x - xpoubelle, 2) + Math.pow(laliste[i].y - ypoubelle, 2))
								if ((distancepoubell * vid.offsetWidth) < 41) {
									trouvepoint = true;
									if ((distancepoubellmin == -1) || (distancepoubellmin > distancepoubell)) {
										distancepoubellmin = distancepoubell;
										numpointpoubell = i;
									}
								}
							}
							i = i + 1;
							if (i == laliste.length) sortie = true;
						}
					if (trouvepoint) {
						laliste.splice(numpointpoubell, 1);
						trouvepoint = false;
					}
				}
				if (echelledejadefinie) updatearrayetgraphique();
			}
		}
	}
}

function definiechelle() {
	oldechelledejadefinie = echelledejadefinie;
	definiechelleencours = true;
	premierpointdefiniechelle = false;
	definiorigineencours = false;
}

function originecoord() {
	definiechelleencours = false;
	definiorigineencours = true;
}

function traceechelle() {
	if (premierpointdefiniechelle) {
		fleche(pointoriginechellex * vid.offsetWidth, pointoriginechelley * vid.offsetWidth, posxcsignanew, posycsignanew, [20, 7, 12, 1, -12, 1, -20, 7], '#FE4101');
	} else if (echelledejadefinie) {
		fleche(pointoriginechellex * vid.offsetWidth, pointoriginechelley * vid.offsetWidth, pointfinechellex * vid.offsetWidth, pointfinechelley * vid.offsetWidth, [20, 7, 12, 1, -12, 1, -20, 7], '#FE4101');
	}
}

function rotationrepere() {
	orientationrepere++;
	definiechelleencours = false;
	if (orientationrepere == 4) orientationrepere = 0;
	updatearrayetgraphique();
}

function tracerepere() {
	switch (orientationrepere) {
		case 0:
			fleche(pointoriginex * vid.offsetWidth - 1, pointoriginey * vid.offsetWidth, pointoriginex * vid.offsetWidth + vid.offsetWidth * 0.08, pointoriginey * vid.offsetWidth, [0, 1, -12, 1, -20, 10], '#475879');
			fleche(pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth + 1, pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth - vid.offsetWidth * 0.08, [0, 1, -12, 1, -20, 10], '#475879');
			break;
		case 1:
			fleche(pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth + 1, pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth - vid.offsetWidth * 0.08, [0, 1, -12, 1, -20, 10], '#475879');
			fleche(pointoriginex * vid.offsetWidth + 1, pointoriginey * vid.offsetWidth, pointoriginex * vid.offsetWidth - vid.offsetWidth * 0.08, pointoriginey * vid.offsetWidth, [0, 1, -12, 1, -20, 10], '#475879');
			break;
		case 2:
			fleche(pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth - 1, pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth + vid.offsetWidth * 0.08, [0, 1, -12, 1, -20, 10], '#475879');
			fleche(pointoriginex * vid.offsetWidth - 1, pointoriginey * vid.offsetWidth, pointoriginex * vid.offsetWidth - vid.offsetWidth * 0.08, pointoriginey * vid.offsetWidth, [0, 1, -12, 1, -20, 10], '#475879');
			break;
		case 3:
			fleche(pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth - 1, pointoriginex * vid.offsetWidth, pointoriginey * vid.offsetWidth + vid.offsetWidth * 0.08, [0, 1, -12, 1, -20, 10], '#475879');
			fleche(pointoriginex * vid.offsetWidth - 1, pointoriginey * vid.offsetWidth, pointoriginex * vid.offsetWidth + vid.offsetWidth * 0.08, pointoriginey * vid.offsetWidth, [0, 1, -12, 1, -20, 10], '#475879');
			break;
	}
}

function updatearrayetgraphique() {
	if (laliste.length > 0) {
		calculepointpourtableau();
		creertramefondgraphique();
	}
}

function fleche(startX, startY, endX, endY, controlPoints, lacolor) {
	context.save();
	context.beginPath();
	context.fillStyle = lacolor;
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	context.shadowBlur = 2;
	context.shadowColor = 'rgba(255,255,255, 1)';
	var dx = endX - startX;
	var dy = endY - startY;
	var len = Math.sqrt(dx * dx + dy * dy);
	var sin = dy / len;
	var cos = dx / len;
	var a = [];
	a.push(0, 0);
	for (var i = 0; i < controlPoints.length; i += 2) {
		var x = controlPoints[i];
		var y = controlPoints[i + 1];
		a.push(x < 0 ? len + x : x, y);
	}
	a.push(len, 0);
	for (var i = controlPoints.length; i > 0; i -= 2) {
		var x = controlPoints[i - 2];
		var y = controlPoints[i - 1];
		a.push(x < 0 ? len + x : x, -y);
	}
	a.push(0, 0);
	for (var i = 0; i < a.length; i += 2) {
		var x = a[i] * cos - a[i + 1] * sin + startX;
		var y = a[i] * sin + a[i + 1] * cos + startY;
		if (i === 0) context.moveTo(x, y);
		else context.lineTo(x, y);
	}
	context.fill();
	context.restore();
}

function isIpad() {
	let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
	return isIOS;
}
cestunipad = isIpad();

function redraw() {
	if (seekedokpourredraw) {
		resize_canvas(vid);
		context.clearRect(0, 0, cv.width, cv.height);
		lalistetempsancien = [];
		tempsdepasse = false;
		letempsila = vid.currentTime;
		for (i = 0; i < laliste.length; i++) {
			if (letempsila >= laliste[i].time) {
				if (((laliste[i].time - letempsila) < frameTime / 2) && ((letempsila - laliste[i].time) <= frameTime / 2)) unecroixbl(laliste[i].x * vid.offsetWidth, laliste[i].y * vid.offsetWidth);
				else unecroix(laliste[i].x * vid.offsetWidth, laliste[i].y * vid.offsetWidth);
				if ((trouvepoint) && (booleffacepoint) && (numpointpoubell == i)) {
					unecroixpoubelle(laliste[numpointpoubell].x * vid.offsetWidth, laliste[numpointpoubell].y * vid.offsetWidth);
				}
				lalistetempsancien[i] = JSON.parse(JSON.stringify(laliste[i]));
				lalistetempsancien[i].x = lalistetempsancien[i].x * vid.offsetWidth;
				lalistetempsancien[i].y = lalistetempsancien[i].y * vid.offsetWidth;
			} else
			if (!tempsdepasse) {
				tempsdepasse = true;
				if (i >= 1) {
					pourcentage = (letempsila - laliste[i - 1].time) / (laliste[i].time - laliste[i - 1].time);
					xpourcentage = laliste[i - 1].x + (laliste[i].x - laliste[i - 1].x) * pourcentage;
					ypourcentage = laliste[i - 1].y + (laliste[i].y - laliste[i - 1].y) * pourcentage;
					lalistetempsancien[i] = {
						x: xpourcentage,
						y: ypourcentage,
						time: letempsila,
						numframe: letempsila * nbimageparsec
					};
					lalistetempsancien[i].x = lalistetempsancien[i].x * vid.offsetWidth;
					lalistetempsancien[i].y = lalistetempsancien[i].y * vid.offsetWidth;
				}
			}
		}
		drawSplines();
		if (getE[6] == "1")if(!booleffacepoint)effacecentre();
		traceechelle();
		tracerepere();
		isIpad();
		if ((loupeaffiche) && (autorisationloupeconfig)) loupe();
		oldisVideoPlaying = isVideoPlaying;
		isVideoPlaying = !!(vid.currentTime >= 0 && !vid.paused && !vid.ended && vid.readyState >= 1);
		isVideoLoupePlaying = !!(vidloupe.currentTime >= 0 && !vidloupe.paused && !vidloupe.ended && vidloupe.readyState >= 1);
		if ((!isVideoPlaying) && (isVideoLoupePlaying)) {
			vidloupe.pause();
			vidloupe.currentTime = vid.currentTime;
		}
		if (!isVideoPlaying)
			if (vidloupe.currentTime != vid.currentTime) vidloupe.currentTime = vid.currentTime;
		if (isVideoPlaying) {
			if (loupeaffiche) {
				masqueloupediv();
			}
		}
		if (oldisVideoPlaying != isVideoPlaying)
			if (!isVideoPlaying) document.getElementById("btplay").innerHTML = '<i class="fas fa-play  fa-2x"></i>';
		if (ilfautpasseralimagesuivante) {
			seekedokpourredraw = false;
			vid.currentTime = vid.currentTime + nbimagesaut * frameTime;
			ilfautpasseralimagesuivante = false;
		}
	}
	requestAnimationFrame(redraw);
}
var modalwebcam = document.getElementById("myModalwebcam");
var btnwebcam = document.getElementById("myBtn");
let preview = document.getElementById("preview");
let recording = vid;
let startButton = document.getElementById("recordgo");
let stopButton = document.getElementById("recordstop");
let downloadButton = document.getElementById("downloadButtonFilm");
let recordingTimeMS = 30000;

function log(msg) {
	console.log(msg);
}

function wait(delayInMS) {
	return new Promise(resolve => identifianttime = setTimeout(resolve, delayInMS));
}

function startRecording(stream, lengthInMS) {
	let recorder = new MediaRecorder(stream);
	let data = [];
	recorder.ondataavailable = event => data.push(event.data);
	recorder.start();
	log(recorder.state + " for " + (lengthInMS / 1000) + " seconds...");
	let stopped = new Promise((resolve, reject) => {
		recorder.onstop = resolve;
		recorder.onerror = event => reject(event.name);
	});
	let recorded = wait(lengthInMS).then(
		() => recorder.state == "recording" && recorder.stop());
	return Promise.all([
		stopped,
		recorded
	]).then(() => data);
}

function stop(stream) {
	stream.getTracks().forEach(track => track.stop());
}
startButton.addEventListener("click", function() {
	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: true
	}).then(stream => {
		preview.srcObject = stream;
		downloadButton.href = stream;
		preview.captureStream = preview.captureStream || preview.mozCaptureStream;
		return new Promise(resolve => preview.onplaying = resolve);
	}).then(() => startRecording(preview.captureStream(), recordingTimeMS)).then(recordedChunks => {
		let recordedBlob = new Blob(recordedChunks, {
			type: "video/webm"
		});
		recording.src = URL.createObjectURL(recordedBlob);
		downloadButton.href = recording.src;
		downloadButton.download = "RecordedVideo.webm";
		videochargee = true;
		log("Successfully recorded " + recordedBlob.size + " bytes of " + recordedBlob.type + " media.");
	}).catch(log);
}, false);
stopButton.addEventListener("click", function() {
	stop(preview.srcObject);
}, false);

function filmewebcam() {
	modalwebcam.style.display = "block";
}

function dista(arr, i, j) {
	return Math.sqrt(Math.pow(arr[2 * i] - arr[2 * j], 2) + Math.pow(arr[2 * i + 1] - arr[2 * j + 1], 2));
}

function va(arr, i, j) {
	return [arr[2 * j] - arr[2 * i], arr[2 * j + 1] - arr[2 * i + 1]]
}

function ctlpts(x1, y1, x2, y2, x3, y3) {
	var t = 0.4;
	var v = va(arguments, 0, 2);
	var d01 = dista(arguments, 0, 1);
	var d12 = dista(arguments, 1, 2);
	var d012 = d01 + d12;
	return [x2 - v[0] * t * d01 / d012, y2 - v[1] * t * d01 / d012,
		x2 + v[0] * t * d12 / d012, y2 + v[1] * t * d12 / d012
	];
}

function drawSplines() {
	cps = [];
	for (var i = 0; i < lalistetempsancien.length - 2; i += 1) {
		cps = cps.concat(ctlpts(lalistetempsancien[i].x, lalistetempsancien[i].y, lalistetempsancien[i + 1].x, lalistetempsancien[i + 1].y, lalistetempsancien[i + 2].x, lalistetempsancien[i + 2].y));
	}
	drawCurvedPath(cps, lalistetempsancien);
}

function drawCurvedPath(cps, pts) {
	var len = pts.length;
	if (len < 2) return;
	context.save();
	if (len == 2) {
		context.beginPath();
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 2;
		context.shadowColor = 'rgba(255,255,255, 1)';
		context.moveTo(pts[0].x, pts[0].y);
		context.lineTo(pts[1].x, pts[1].y);
		context.stroke();
	} else {
		context.beginPath();
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 2;
		context.shadowColor = 'rgba(255,255,255, 1)';
		context.moveTo(pts[0].x, pts[0].y);
		context.quadraticCurveTo(cps[0], cps[1], pts[1].x, pts[1].y);
		for (var i = 2; i < len - 1; i += 1) {
			context.bezierCurveTo(cps[(2 * (i - 1) - 1) * 2], cps[(2 * (i - 1) - 1) * 2 + 1], cps[(2 * (i - 1)) * 2], cps[(2 * (i - 1)) * 2 + 1], pts[i].x, pts[i].y);
		}
		context.quadraticCurveTo(cps[(2 * (i - 1) - 1) * 2], cps[(2 * (i - 1) - 1) * 2 + 1], pts[i].x, pts[i].y);
		context.stroke();
	}
	context.restore();
}

function drawSplinesloupe() {
	cps = [];
	for (var i = 0; i < lalistetempsancien.length - 2; i += 1) {
		cps = cps.concat(ctlpts(lalistetempsancien[i].x, lalistetempsancien[i].y, lalistetempsancien[i + 1].x, lalistetempsancien[i + 1].y, lalistetempsancien[i + 2].x, lalistetempsancien[i + 2].y));
	}
	drawCurvedPathloupe(cps, lalistetempsancien);
}

function drawCurvedPathloupe(cps, pts) {
	var len = pts.length;
	if (len < 2) return;
	context.save();
	if (len == 2) {
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 2;
		context.shadowColor = 'rgba(255,255,255, 1)';
		context.moveTo(pts[0].x, pts[0].y);
		context.lineTo(pts[1].x, pts[1].y);
		context.stroke();
	} else {
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 2;
		context.shadowColor = 'rgba(255,255,255, 1)';
		context.moveTo(pts[0].x, pts[0].y);
		context.quadraticCurveTo(cps[0], cps[1], pts[1].x, pts[1].y);
		for (var i = 2; i < len - 1; i += 1) {
			context.bezierCurveTo(cps[(2 * (i - 1) - 1) * 2], cps[(2 * (i - 1) - 1) * 2 + 1], cps[(2 * (i - 1)) * 2], cps[(2 * (i - 1)) * 2 + 1], pts[i].x, pts[i].y);
		}
		context.quadraticCurveTo(cps[(2 * (i - 1) - 1) * 2], cps[(2 * (i - 1) - 1) * 2 + 1], pts[i].x, pts[i].y);
		context.stroke();
	}
	context.restore();
}

function restaurevieilleechelle() {
	definiechelleencours = false;
	premierpointdefiniechelle = false;
	if (!oldechelledejadefinie) {
		definiechelleencours = false;
		echelledejadefinie = false;
		premierpointdefiniechelle = false;
	} else {
		pointoriginechellex = oldpointoriginechellex;
		pointoriginechelley = oldpointoriginechelley;
		pointfinechellex = oldpointfinechellex;
		pointfinechelley = oldpointfinechelley;
		echelledejadefinie = true;
		updatearrayetgraphique();
	}
}
var modal = document.getElementById("myModal");
var modalpresentation = document.getElementById("idpresentation");
var btn = document.getElementById("myBtn");
var btnvalidlong = document.getElementById("validlong");
var span = document.getElementById("closeechelle");
var closepresentation = document.getElementById("closepresentation");
span.onclick = function() {
	modal.style.display = "none";
	restaurevieilleechelle();
}
closepresentation.onclick = function() {
	modalpresentation.style.display = "none";
}
btnvalidlong.onclick = function() {
	longueurechellereelle = parseFloat(document.getElementById('longetalon').value.replace(/,/g, "."));
	if (isNaN(longueurechellereelle)) {
		restaurevieilleechelle();
	} else updatearrayetgraphique();
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		restaurevieilleechelle();
	}
	if (event.target == modalwebcam) {
		modalwebcam.style.display = "none";
	}
	if (event.target == modalfps) {
		modalfps.style.display = "none";
	}
	if (event.target == modalcontraste) {
		brightness = oldbrightness;
		luminoslid.value = brightness;
		contrast = oldcontrast;
		contrasslid.value = contrast;
		saturate = oldsaturate;
		saturslid.value = saturate;
		invert = oldinvert;
		invertslid.value = invert;
		huerotate = oldhuerotate;
		huerotateslide.value = huerotate;
		updateFilters();
		modalcontraste.style.display = "none";
	}
	if (event.target == modalpresentation) {
		modalpresentation.style.display = "none";
	}
	if (event.target == modalcaptureecran) {
		modalcaptureecran.style.display = "none";
	}
}

function vitessexi1i(i) {
	returnvx = undefined;
	if ((typeof laliste[i] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
		returnvx = (laliste[i + 1].xreel - laliste[i].xreel) / (laliste[i + 1].time - laliste[i].time);
	}
	return (returnvx);
}

function vitesseyi1i(i) {
	returnvy = undefined;
	if ((typeof laliste[i] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
		returnvy = (laliste[i + 1].yreel - laliste[i].yreel) / (laliste[i + 1].time - laliste[i].time);
	}
	return (returnvy);
}

function gamaxi1i(i) {
	returnax = undefined;
	if ((typeof laliste[i] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
		if ((typeof laliste[i].vxreel !== 'undefined') && (typeof laliste[i + 1].vxreel !== 'undefined'))
			if ((laliste[i].vxreel !== 'undefined') && (laliste[i + 1].vxreel !== 'undefined')) returnax = (laliste[i + 1].vxreel - laliste[i].vxreel) / (laliste[i + 1].time - laliste[i].time);
	}
	return (returnax);
}

function gamayi1i(i) {
	returnay = undefined;
	if ((typeof laliste[i] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
		if ((typeof laliste[i].vyreel !== 'undefined') && (typeof laliste[i + 1].vyreel !== 'undefined'))
			if ((laliste[i].vyreel !== 'undefined') && (laliste[i + 1].vyreel !== 'undefined')) returnay = (laliste[i + 1].vyreel - laliste[i].vyreel) / (laliste[i + 1].time - laliste[i].time);
	}
	return (returnay);
}

function vitessex(i) {
	returnvx = undefined;
	if (i > 0)
		if ((typeof laliste[i - 1] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
			returnvx = (laliste[i + 1].xreel - laliste[i - 1].xreel) / (laliste[i + 1].time - laliste[i - 1].time);
		}
	return (returnvx);
}

function vitessey(i) {
	returnvy = undefined;
	if (i > 0)
		if ((typeof laliste[i - 1] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
			returnvy = (laliste[i + 1].yreel - laliste[i - 1].yreel) / (laliste[i + 1].time - laliste[i - 1].time);
		}
	return (returnvy);
}

function gamax(i) {
	returnax = undefined;
	if (i > 0)
		if ((typeof laliste[i - 1] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
			if ((typeof laliste[i - 1].vxreel !== 'undefined') && (typeof laliste[i + 1].vxreel !== 'undefined'))
				if ((laliste[i - 1].vxreel !== 'undefined') && (laliste[i + 1].vxreel !== 'undefined')) returnax = (laliste[i + 1].vxreel - laliste[i - 1].vxreel) / (laliste[i + 1].time - laliste[i - 1].time);
		}
	return (returnax);
}

function gamay(i) {
	returnay = undefined;
	if (i > 0)
		if ((typeof laliste[i - 1] !== 'undefined') && (typeof laliste[i + 1] !== 'undefined')) {
			if ((typeof laliste[i - 1].vyreel !== 'undefined') && (typeof laliste[i + 1].vyreel !== 'undefined'))
				if ((laliste[i - 1].vyreel !== 'undefined') && (laliste[i + 1].vyreel !== 'undefined')) returnay = (laliste[i + 1].vyreel - laliste[i - 1].vyreel) / (laliste[i + 1].time - laliste[i - 1].time);
		}
	return (returnay);
}

function remiset0() {
	if (configremiseazer) {
		configremiseazer = false;
		document.getElementById('idremisazero').innerHTML = '<i class="far fa-clock"></i>';
	} else {
		configremiseazer = true;
		document.getElementById('idremisazero').innerHTML = '<i class="fas fa-history"></i>';
	}
	updatearrayetgraphique();
};

function calculepointpourtableau() {
	if (Array.isArray(laliste)) {
		if ((laliste.length) == 0) return;
	} else return;
	tabledatatabulator = [];
	rapportvideovertsurhor = vid.videoHeight / vid.videoWidth;
	pourcentageechelle = parseFloat(longueurechellereelle) / Math.sqrt(Math.pow(pointfinechellex - pointoriginechellex, 2) + Math.pow((pointfinechelley - pointoriginechelley), 2));
	calculxextremedejafait = false;
	calculyextremedejafait = false;
	calculvreelextremedejafait = false;
	calculareelextremedejafait = false;
	for (i = 0; i < laliste.length; i++) {
		switch (orientationrepere) {
			case 0:
				deltaorientx = 1;
				deltaorienty = -1;
				break;
			case 1:
				deltaorientx = -1;
				deltaorienty = -1;
				break;
			case 2:
				deltaorientx = -1;
				deltaorienty = 1;
				break;
			case 3:
				deltaorientx = 1;
				deltaorienty = 1;
				break;
		}
		if (configremiseazer) laliste[i].tremisazero = laliste[i].time - laliste[0].time;
		else laliste[i].tremisazero = laliste[i].time;
		laliste[i].tremisazero = parseFloat(laliste[i].tremisazero.toPrecision(nbchiffreprecision));
		laliste[i].xreel = deltaorientx * (laliste[i].x - pointoriginex) * pourcentageechelle;
		laliste[i].yreel = deltaorienty * (laliste[i].y - pointoriginey) * pourcentageechelle;
		if (!calculxextremedejafait) {
			calculxmin = 1 * laliste[i].xreel;
			calculxmax = 1 * laliste[i].xreel;
			calculymin = laliste[i].yreel;
			calculymax = laliste[i].yreel;
			calculxextremedejafait = true;
		} else {
			if (calculxmin > laliste[i].xreel) calculxmin = 1 * laliste[i].xreel;
			if (calculxmax < laliste[i].xreel) calculxmax = 1 * laliste[i].xreel;
			if (calculymin > laliste[i].yreel) calculymin = 1 * laliste[i].yreel;
			if (calculymax < laliste[i].yreel) calculymax = 1 * laliste[i].yreel;
		}
		laliste[i].xreel = parseFloat(laliste[i].xreel.toPrecision(nbchiffreprecision));
		laliste[i].yreel = parseFloat(laliste[i].yreel.toPrecision(nbchiffreprecision));
	}
	for (i = 0; i < laliste.length; i++) {
		laliste[i].vxreel = vitessex(i);
		laliste[i].vyreel = vitessey(i);
		if ((laliste[i].vxreel !== undefined) && (laliste[i].vyreel !== undefined)) {
			laliste[i].vreel = Math.sqrt(Math.pow(laliste[i].vxreel, 2) + Math.pow(laliste[i].vyreel, 2));
			if (!calculvreelextremedejafait) {
				calculvreelmin = laliste[i].vreel;
				calculvreelmax = laliste[i].vreel;
				calculvreelextremedejafait = true;
			} else {
				if (calculvreelmin > laliste[i].vreel) calculvreelmin = 1 * laliste[i].vreel;
				if (calculvreelmax < laliste[i].vreel) calculvreelmax = 1 * laliste[i].vreel;
			}
			laliste[i].vxreel = parseFloat(laliste[i].vxreel.toPrecision(nbchiffreprecision));
			laliste[i].vyreel = parseFloat(laliste[i].vyreel.toPrecision(nbchiffreprecision));
			laliste[i].vreel = parseFloat(laliste[i].vreel.toPrecision(nbchiffreprecision));
		} else laliste[i].vreel = undefined;
	}
	for (i = 0; i < laliste.length; i++) {
		laliste[i].ax = gamax(i);
		laliste[i].ay = gamay(i);
		if ((laliste[i].ax !== undefined) && (laliste[i].ay !== undefined)) {
			laliste[i].a = Math.sqrt(Math.pow(laliste[i].ax, 2) + Math.pow(laliste[i].ay, 2));
			if (!calculareelextremedejafait) {
				calculamin = laliste[i].a;
				calculamax = laliste[i].a;
				calculareelextremedejafait = true;
			} else {
				if (calculamin > laliste[i].a) calculamin = 1 * laliste[i].a;
				if (calculamax < laliste[i].a) calculamax = 1 * laliste[i].a;
			}
			laliste[i].ax = parseFloat(laliste[i].ax.toPrecision(nbchiffreprecision));
			laliste[i].ay = parseFloat(laliste[i].ay.toPrecision(nbchiffreprecision));
			laliste[i].a = parseFloat(laliste[i].a.toPrecision(nbchiffreprecision));
		} else laliste[i].a = undefined;
	}
	for (i = 0; i < laliste.length; i++) {
		objettemp = {
			id: i + 1,
			name: i + 1
		}
		for (j = 0; j < getA.length; j++)
			if (getA[j] == "1") switch (j) {
				case 0:
					objettemp.temps = laliste[i].tremisazero;
					break;
				case 1:
					objettemp.x = laliste[i].xreel;
					break;
				case 2:
					objettemp.y = laliste[i].yreel;
					break;
				case 3:
					objettemp.vx = laliste[i].vxreel;
					break;
				case 4:
					objettemp.vy = laliste[i].vyreel;
					break;
				case 5:
					objettemp.v = laliste[i].vreel;
					break;
				case 6:
					objettemp.ax = laliste[i].ax;
					break;
				case 7:
					objettemp.ay = laliste[i].ay;
					break;
				case 8:
					objettemp.a = laliste[i].a;
					break;
			}
		tabledatatabulator.push(objettemp);
	}
	table.replaceData(tabledatatabulator);
}
var table;

function exportclipboardpoint() {
	table.copyToClipboard();
}

function exportcsv() {
	var pom = document.createElement('a');
	var csvContent = "";
	arraydesdonnees = table.getData();
	if (getB[2] == "1") {
		delimiteurcsv = ",";
	} else {
		delimiteurcsv = ";";
	}
	arraydesdonnees.forEach((item, index) => {
		if (getB[0] == "1")
			if (index == 0) csvContent = lesphrasestraduites.numero + delimiteurcsv + (item.temps == undefined ? "" : lesphrasestraduites.tempsunite + delimiteurcsv) + (item.x == undefined ? "" : lesphrasestraduites.xunite + delimiteurcsv) + (item.y == undefined ? "" : lesphrasestraduites.yunite + delimiteurcsv) + (item.vx == undefined ? "" : lesphrasestraduites.vxunite + delimiteurcsv) + (item.vy == undefined ? "" : lesphrasestraduites.vyunite + delimiteurcsv) + (item.v == undefined ? "" : lesphrasestraduites.vunite + delimiteurcsv) + (item.ax == undefined ? "" : lesphrasestraduites.axunite + delimiteurcsv) + (item.ay == undefined ? "" : lesphrasestraduites.ayunite + delimiteurcsv) + (item.a == undefined ? "" : lesphrasestraduites.aunite) + "\r\n";
		tempoclip = item.name + delimiteurcsv + (item.temps == undefined ? "" : item.temps + delimiteurcsv) + (item.x == undefined ? "" : item.x + delimiteurcsv) + (item.y == undefined ? "" : item.y + delimiteurcsv) + (item.vx == undefined ? "" : item.vx + delimiteurcsv) + (item.vy == undefined ? "" : item.vy + delimiteurcsv) + (item.v == undefined ? "" : item.v + delimiteurcsv) + (item.ax == undefined ? "" : item.ax + delimiteurcsv) + (item.ay == undefined ? "" : item.ay + delimiteurcsv) + (item.a == undefined ? "" : item.a) + "\r\n";
		if (getB[1] == "1") tempoclip = tempoclip.replace(/\./g, ",");
		csvContent = csvContent + tempoclip;
	})
	var blob = new Blob([csvContent], {
		type: 'text/csv;charset=UTF-16LE;'
	});
	var url = URL.createObjectURL(blob);
	pom.href = url;
	pom.setAttribute('download', 'MecaChrono.csv');
	pom.click();
}

function exportxls() {
	table.download("xlsx", "MecaChrono.xlsx", {
		sheetName: lesphrasestraduites.valeurs
	});
}

function exportclipboardvirgule() {
	pourclipboard = "";
	tempoclip = "";
	arraydesdonnees = table.getData();
	arraydesdonnees.forEach((item, index) => {
		if (getB[0] == "1")
			if (index == 0) pourclipboard = lesphrasestraduites.numero + "\t" + (item.temps == undefined ? "" : lesphrasestraduites.tempsunite + "\t") + (item.x == undefined ? "" : lesphrasestraduites.xunite + "\t") + (item.y == undefined ? "" : lesphrasestraduites.yunite + "\t") + (item.vx == undefined ? "" : lesphrasestraduites.vxunite + "\t") + (item.vy == undefined ? "" : lesphrasestraduites.vyunite + "\t") + (item.v == undefined ? "" : lesphrasestraduites.vunite + "\t") + (item.ax == undefined ? "" : lesphrasestraduites.axunite + "\t") + (item.ay == undefined ? "" : lesphrasestraduites.ayunite + "\t") + (item.a == undefined ? "" : lesphrasestraduites.aunite) + "\n";
		tempoclip = item.name + "\t" + (item.temps == undefined ? "" : item.temps + "\t") + (item.x == undefined ? "" : item.x + "\t") + (item.y == undefined ? "" : item.y + "\t") + (item.vx == undefined ? "" : item.vx + "\t") + (item.vy == undefined ? "" : item.vy + "\t") + (item.v == undefined ? "" : item.v + "\t") + (item.ax == undefined ? "" : item.ax + "\t") + (item.ay == undefined ? "" : item.ay + "\t") + (item.a == undefined ? "" : item.a) + "\n";
		if (getB[1] == "1") tempoclip = tempoclip.replace(/\./g, ",");
		pourclipboard = pourclipboard + tempoclip;
	})
	navigator.clipboard.writeText(pourclipboard).then(() => {}).catch(err => {
		alert(lesphrasestraduites.alertcopier + ' : ', err);
	});
}

function exportpython() {
	pourclipboard = "";
	tempoclip = "";
	arraydesdonnees = table.getData();
	variabledefini = [];
	arraydesdonnees.forEach((item, index) => {
		if (index == 0) {
			tpython = lesphrasestraduites.t + " = [ ";
			xpython = lesphrasestraduites.x + " = [";
			ypython = lesphrasestraduites.y + " = [";
			vxpython = lesphrasestraduites.vx + " = [";
			vypython = lesphrasestraduites.vy + " = [";
			vpython = lesphrasestraduites.v + " = [";
			axpython = lesphrasestraduites.ax + " = [";
			aypython = lesphrasestraduites.ay + " = [";
			apython = lesphrasestraduites.a + " = [";
			tpython += item.temps == undefined ? "None" : item.temps;
			xpython += item.x == undefined ? "None" : item.x;
			ypython += item.y == undefined ? "None" : item.y;
			vxpython += item.vx == undefined ? "None" : item.vx;
			vypython += item.vy == undefined ? "None" : item.vy;
			vpython += item.v == undefined ? "None" : item.v;
			axpython += item.ax == undefined ? "None" : item.ax;
			aypython += item.ay == undefined ? "None" : item.ay;
			apython += item.a == undefined ? "None" : item.a;
			variabledefini['temps'] = (item.temps == undefined) ? false : true;
			variabledefini['x'] = (item.x == undefined) ? false : true;
			variabledefini['y'] = (item.y == undefined) ? false : true;
			variabledefini['vx'] = (item.vx == undefined) ? false : true;
			variabledefini['vy'] = (item.vy == undefined) ? false : true;
			variabledefini['v'] = (item.v == undefined) ? false : true;
			variabledefini['ax'] = (item.ax == undefined) ? false : true;
			variabledefini['ay'] = (item.ay == undefined) ? false : true;
			variabledefini['a'] = (item.a == undefined) ? false : true;
		} else {
			tpython += item.temps == undefined ? ", None" : ", " + item.temps;
			xpython += item.x == undefined ? ", None" : ", " + item.x;
			ypython += item.y == undefined ? ", None" : ", " + item.y;
			vxpython += item.vx == undefined ? ", None" : ", " + item.vx;
			vypython += item.vy == undefined ? ", None" : ", " + item.vy;
			vpython += item.v == undefined ? ", None" : ", " + item.v;
			axpython += item.ax == undefined ? ", None" : ", " + item.ax;
			aypython += item.ay == undefined ? ", None" : ", " + item.ay;
			apython += item.a == undefined ? ", None" : ", " + item.a;
			if (!(item.temps == undefined)) variabledefini['temps'] = true;
			if (!(item.x == undefined)) variabledefini['x'] = true;
			if (!(item.y == undefined)) variabledefini['y'] = true;
			if (!(item.vx == undefined)) variabledefini['vx'] = true;
			if (!(item.vy == undefined)) variabledefini['vy'] = true;
			if (!(item.v == undefined)) variabledefini['v'] = true;
			if (!(item.ax == undefined)) variabledefini['ax'] = true;
			if (!(item.ay == undefined)) variabledefini['ay'] = true;
			if (!(item.a == undefined)) variabledefini['a'] = true;
		}
	})
	tpython += tpython == "" ? "" : "]\r\n\r\n";
	xpython += xpython == "" ? "" : "]\r\n\r\n";
	ypython += ypython == "" ? "" : "]\r\n\r\n";
	vxpython += vxpython == "" ? "" : "]\r\n\r\n";
	vypython += vypython == "" ? "" : "]\r\n\r\n";
	vpython += vpython == "" ? "" : "]\r\n\r\n";
	axpython += axpython == "" ? "" : "]\r\n\r\n";
	aypython += aypython == "" ? "" : "]\r\n\r\n";
	apython += apython == "" ? "" : "]\r\n\r\n";
	pourclipboard = '';
	if (variabledefini['temps']) pourclipboard = tpython;
	if (variabledefini['x']) pourclipboard = pourclipboard + xpython;
	if (variabledefini['y']) pourclipboard = pourclipboard + ypython;
	if (variabledefini['vx']) pourclipboard = pourclipboard + vxpython;
	if (variabledefini['vy']) pourclipboard = pourclipboard + vypython;
	if (variabledefini['v']) pourclipboard = pourclipboard + vpython;
	if (variabledefini['ax']) pourclipboard = pourclipboard + axpython;
	if (variabledefini['ay']) pourclipboard = pourclipboard + aypython;
	if (variabledefini['a']) pourclipboard = pourclipboard + apython;
	navigator.clipboard.writeText(pourclipboard).then(() => {
		alert(lesphrasestraduites.lesdonneesontetecopiees);
	}).catch(err => {
		alert(lesphrasestraduites.alertcopier + '  : ', err);
	});
}

function saveproject() {
	filename = "MechaChrono.json";
	sauvegarde = {};
	sauvegarde.laliste = laliste;
	sauvegarde.pointoriginechelley = pointoriginechellex;
	sauvegarde.pointoriginechelley = pointoriginechelley;
	sauvegarde.pointfinechellex = pointfinechellex;
	sauvegarde.pointfinechelley = pointfinechelley;
	sauvegarde.longueurechellereelle = longueurechellereelle;
	sauvegarde.pointoriginex = pointoriginex;
	sauvegarde.pointoriginey = pointoriginey;
	sauvegarde.nomdelavideo = nomdelavideo;
	sauvegarde.nbimagesaut = nbimagesaut;
	sauvegarde.nbimageparsec = nbimageparsec;
	data = JSON.stringify(sauvegarde);
	var blob = new Blob([data], {
		type: 'application/json'
	});
	if (window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveBlob(blob, filename);
	} else {
		var elem = window.document.createElement('a');
		elem.href = window.URL.createObjectURL(blob);
		elem.download = filename;
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}
	alert(lesphrasestraduites.alertinclus);
}
var fileInputjson = document.getElementById('idinputproject');
fileInputjson.addEventListener('change', function(e) {
	var file = fileInputjson.files[0];
	if (file.type.match(".json$", "i")) {
		var reader = new FileReader();
		reader.onload = function(e) {
			initvariable();
			ilfautinitialisertouteslesvariables = false;
			lesdata = JSON.parse(reader.result);
			laliste = lesdata.laliste
			pointoriginechellex = lesdata.pointoriginechellex;
			pointoriginechelley = lesdata.pointoriginechelley;
			pointfinechellex = lesdata.pointfinechellex;
			pointfinechelley = lesdata.pointfinechelley;
			longueurechellereelle = lesdata.longueurechellereelle;
			pointoriginex = lesdata.pointoriginex;
			pointoriginey = lesdata.pointoriginey;
			nomdelavideo = lesdata.nomdelavideo;
			nbimagesaut = lesdata.nbimagesaut;
			nbimageparsec = lesdata.nbimageparsec;
			echelledejadefinie = true;
			document.getElementById("idfps").setAttribute('value', nbimageparsec);
			document.getElementById("idnbimdeux").setAttribute('value', nbimagesaut);
			modalnomvideoprojet.style.display = "block";
		}
		reader.readAsText(file);
	} else {
		alert(lesphrasestraduites.bonfichier);
	}
});
var leschartdynamiques = document.getElementsByClassName("canvasdynamique");

function xmouseverscourbe(co, x, y) {
	Xdansgraph = echellex[co] * (x - margex * largeurcanvasgr[co]) + arrayxmin[co];
	Ydansgraph = -(y - (1 - margey) * hauteurcanvasgr[co]) * echelley[co] + arrayymin[co];
	lereturn = {
		x: Xdansgraph,
		y: Ydansgraph
	};
	return (lereturn);
}

function xcourbeverscanvas(co, x, y) {
	xcanvas = margex * largeurcanvasgr[co] + (x - arrayxmin[co]) / echellex[co];
	ycanvas = (1 - margey) * hauteurcanvasgr[co] - (y - arrayymin[co]) / echelley[co];
	lereturn = {
		x: xcanvas,
		y: ycanvas
	};
	return (lereturn);
}

function cherchepoint(co, x, y) {
	trouve = false;
	bonlli = undefined;
	distance = undefined;
	lli = 0;
	lexy = xcourbeverscanvas(co, x, y);
	while ((lli < laliste.length)) {
		if ((Math.abs(lesvalueabscisse[lli] - x) < unitex[co]) && (Math.abs(touteslesvalue[co][lli] - y) < unitey[co])) {
			trouve = true;
			lesv = xcourbeverscanvas(co, lesvalueabscisse[lli], touteslesvalue[co][lli]);
			if ((distance === undefined) || (distance > Math.sqrt(Math.pow(lesv.x - lexy.x, 2) + Math.pow(lesv.y - lexy.y, 2)))) {
				distance = Math.sqrt(Math.pow(lesv.x - lexy.x, 2) + Math.pow(lesv.y - lexy.y, 2));
				bonlli = lli;
			}
		}
		lli++;
	}
	if (trouve) return (bonlli);
	else return (undefined);
}

function surbrillance() {
	if (reglagezoomencours) {
		contextdynamique[numcanvaszoomencours].clearRect(0, 0, cvdynamique[numcanvaszoomencours].width, cvdynamique[numcanvaszoomencours].height);
		contextdynamique[numcanvaszoomencours].save();
		contextdynamique[numcanvaszoomencours].fillStyle = 'rgba(50,50,50,0.4)';
		contextdynamique[numcanvaszoomencours].fillRect(pointoriginezoom.x, pointoriginezoom.y, pointfinalzoom.x - pointoriginezoom.x, pointfinalzoom.y - pointoriginezoom.y);
		contextdynamique[numcanvaszoomencours].strokeStyle = 'rgba(0,0,0,1)';
		contextdynamique[numcanvaszoomencours].strokeRect(pointoriginezoom.x, pointoriginezoom.y, pointfinalzoom.x - pointoriginezoom.x, pointfinalzoom.y - pointoriginezoom.y);
		contextdynamique[numcanvaszoomencours].restore();
	}
	if (numpointbrillant !== undefined) {
		if (affichetooltip) phrasetooltip = "n°" + numpointbrillant + "<br>" + lesgrandeurs[getC] + " = " + ((lesvalueabscisse[numpointbrillant]).toPrecision(4)) + " " + lesunites[getC] + "<br>";
		for (numc = 0; numc < getA.length; numc++) {
			if (getA[numc] == "1")
				if (numc != getC) {
					if (!((numc == numcanvaszoomencours) && (reglagezoomencours))) contextdynamique[numc].clearRect(0, 0, cvdynamique[numc].width, cvdynamique[numc].height);
					if ((touteslesvalue[numc][numpointbrillant] !== undefined) && (lesvalueabscisse[numpointbrillant] !== undefined)) {
						diametrepoint = Math.min(largeurcanvasgr[numc] / 50, hauteurcanvasgr[numc] / 50);
						coordcanv = xcourbeverscanvas(numc, lesvalueabscisse[numpointbrillant], touteslesvalue[numc][numpointbrillant]);
						contextdynamique[numc].save();
						contextdynamique[numc].beginPath();
						contextdynamique[numc].arc(coordcanv.x, coordcanv.y, diametrepoint, 0, 6.2832);
						contextdynamique[numc].fillStyle = listecouleur[numc];
						contextdynamique[numc].globalAlpha = 0.3;
						contextdynamique[numc].fill();
						contextdynamique[numc].beginPath();
						contextdynamique[numc].globalAlpha = 1;
						contextdynamique[numc].moveTo(coordcanv.x, hauteurcanvasgr[numc] * (1 - margey));
						contextdynamique[numc].lineTo(coordcanv.x, coordcanv.y);
						contextdynamique[numc].moveTo(largeurcanvasgr[numc] * margex, coordcanv.y);
						contextdynamique[numc].lineTo(coordcanv.x, coordcanv.y);
						contextdynamique[numc].lineWidth = 4;
						contextdynamique[numc].setLineDash([14, 16]);
						contextdynamique[numc].strokeStyle = "#FFFFFF";
						contextdynamique[numc].stroke();
						fontsizeresult = 20;
						contextdynamique[numc].font = fontsizeresult + "px Arial";
						contextdynamique[numc].textAlign = "right";
						contextdynamique[numc].textBaseline = "bottom";
						contextdynamique[numc].fillText(lesgrandeurs[numc] + " = " + ((touteslesvalue[numc][numpointbrillant]).toPrecision(4)) + " " + lesunites[numc], (1 - margex * 1 / 2) * largeurcanvasgr[numc], (margey * 0.5) * hauteurcanvasgr[numc]);
						contextdynamique[numc].restore();
						phrasetooltip += lesgrandeurs[numc] + " = " + ((touteslesvalue[numc][numpointbrillant]).toPrecision(4)) + " " + lesunites[numc] + "<br>";
					}
				}
		}
		if (affichetooltip) {
			affichetooltip = false;
			affichagevaleurgraphtooltip.innerHTML = phrasetooltip;
		}
	}
	window.requestAnimationFrame(surbrillance);
}

function initchartdynamique() {
	for (var i = 0; i < leschartdynamiques.length; i++) {
		leschartdynamiques[i].addEventListener("touchstart", handleStart, false);
		leschartdynamiques[i].addEventListener("touchmove", handleMove, false);

		function handleStart(evt) {
			evt.preventDefault();
			numdynamiquetablette = evt.target.getAttribute("data-numcanvas");
			var touches = evt.targetTouches;
			if (touches.length == 1) {
				rect = evt.target.getBoundingClientRect();
				var bodyRect = document.body.getBoundingClientRect();
				x = touches[0].pageX - (rect.left - bodyRect.left);
				x = touches[0].pageX - (rect.left - bodyRect.left);
				y = touches[0].pageY - (rect.top - bodyRect.top);
				x = (x / cvgraph[numdynamiquetablette].offsetWidth) * largeurcanvasgr[numdynamiquetablette];
				y = (y / cvgraph[numdynamiquetablette].offsetHeight) * hauteurcanvasgr[numdynamiquetablette];
				coordsouris = xmouseverscourbe(numdynamiquetablette, x, y);
				oldpointbrillant = numpointbrillant;
				numpointbrillant = cherchepoint(numdynamiquetablette, coordsouris.x, coordsouris.y);
				if (oldpointprillant !== numpointbrillant) {
					affichetooltip = true;
					affichagevaleurgraphtooltip.style.display = "inline-block ";
				}
			}
			if (touches.length == 2) {
				rect = evt.target.getBoundingClientRect();
				var bodyRect = document.body.getBoundingClientRect();
				x1touch = Math.min(touches[0].pageX - (rect.left - bodyRect.left), touches[1].pageX - (rect.left - bodyRect.left));
				y1touch = Math.min(touches[0].pageY - (rect.top - bodyRect.top), touches[1].pageY - (rect.top - bodyRect.top));
				x2touch = Math.max(touches[0].pageX - (rect.left - bodyRect.left), touches[1].pageX - (rect.left - bodyRect.left));;
				y2touch = Math.max(touches[0].pageY - (rect.top - bodyRect.top), touches[1].pageY - (rect.top - bodyRect.top));;
				x1touch = (x1touch / cvgraph[numdynamiquetablette].offsetWidth) * largeurcanvasgr[numdynamiquetablette];
				y1touch = (y1touch / cvgraph[numdynamiquetablette].offsetHeight) * hauteurcanvasgr[numdynamiquetablette];
				x2touch = (x2touch / cvgraph[numdynamiquetablette].offsetWidth) * largeurcanvasgr[numdynamiquetablette];
				y2touch = (y2touch / cvgraph[numdynamiquetablette].offsetHeight) * hauteurcanvasgr[numdynamiquetablette];
				ecartoriginex = Math.abs(x2touch - x1touch);
				ecartoriginey = Math.abs(y2touch - y1touch);
				les1 = xmouseverscourbe(numdynamiquetablette, x1touch, y1touch);
				les2 = xmouseverscourbe(numdynamiquetablette, x2touch, y2touch);
				x1touchsansconversion = x1touch;
				x2touchsansconversion = x2touch;
				y1touchsansconversion = y1touch;
				y2touchsansconversion = y2touch;
				lalargeurgraphique = arrayxmax[numdynamiquetablette] - arrayxmin[numdynamiquetablette];
				lahauteurgraphique = arrayymax[numdynamiquetablette] - arrayymin[numdynamiquetablette];
				x1touch = les1.x;
				y1touch = les1.y;
				x2touch = les2.x;
				y2touch = les2.y;
				detectpinch = true;
				xmilieu = (x2touch - x1touch) / 2;
				ymilieu = (y2touch - y1touch) / 2;
				arrayymaxpitch = arrayymax[numdynamiquetablette];
				arrayxmaxpitch = arrayxmax[numdynamiquetablette];
				arrayyminpitch = arrayymin[numdynamiquetablette];
				arrayxminpitch = arrayxmin[numdynamiquetablette];
			}
		}

		function handleMove(evt) {
			evt.preventDefault();
			var touches = evt.changedTouches;
			var targetTouches = evt.targetTouches;
			var allTouches = evt.touches;
			moyenneX = 0;
			moyenneY = 0;
			for (var i = 0; i < allTouches.length; i++) {
				moyenneX += allTouches[i].pageX;
				moyenneY += allTouches[i].pageY;
			}
			moyenneX = moyenneX / allTouches.length;
			moyenneY = moyenneY / allTouches.length;
			if ((detectpinch) && (touches.length == 2)) {
				rect = evt.target.getBoundingClientRect();
				var bodyRect = document.body.getBoundingClientRect();
				x1touchfin = Math.min(allTouches[0].pageX - (rect.left - bodyRect.left), allTouches[1].pageX - (rect.left - bodyRect.left));
				y1touchfin = Math.min(allTouches[0].pageY - (rect.top - bodyRect.top), allTouches[1].pageY - (rect.top - bodyRect.top));
				x2touchfin = Math.max(allTouches[0].pageX - (rect.left - bodyRect.left), allTouches[1].pageX - (rect.left - bodyRect.left));
				y2touchfin = Math.max(allTouches[0].pageY - (rect.top - bodyRect.top), allTouches[1].pageY - (rect.top - bodyRect.top));;
				x1touchfin = (x1touchfin / cvgraph[numdynamiquetablette].offsetWidth) * largeurcanvasgr[numdynamiquetablette];
				y1touchfin = (y1touchfin / cvgraph[numdynamiquetablette].offsetHeight) * hauteurcanvasgr[numdynamiquetablette];
				x2touchfin = (x2touchfin / cvgraph[numdynamiquetablette].offsetWidth) * largeurcanvasgr[numdynamiquetablette];
				y2touchfin = (y2touchfin / cvgraph[numdynamiquetablette].offsetHeight) * hauteurcanvasgr[numdynamiquetablette];
				x1touchfinsansconversion = x1touchfin;
				x2touchfinsansconversion = x2touchfin;
				y1touchfinsansconversion = y1touchfin;
				y2touchfinsansconversion = y2touchfin;
				les1fin = xmouseverscourbe(numdynamiquetablette, x1touchfin, y1touchfin);
				les2fin = xmouseverscourbe(numdynamiquetablette, x2touchfin, y2touchfin);
				x1touchfin = les1fin.x;
				y1touchfin = les1fin.y;
				x2touchfin = les2fin.x;
				y2touchfin = les2fin.y;
				ecartnewx = Math.abs(x2touchfinsansconversion - x1touchfinsansconversion);
				ecartnewy = Math.abs(y2touchfinsansconversion - y1touchfinsansconversion);
				var mouseX = moyenneX - (rect.left - bodyRect.left);
				var mouseY = moyenneY - (rect.top - bodyRect.top);
				arrayxmintempo = x1touch - Math.abs((x2touch - x1touch) * (x1touchfinsansconversion - 1. * margex * largeurcanvasgr[numdynamiquetablette]) / (x2touchfinsansconversion - x1touchfinsansconversion));
				scalex = ecartnewx / ecartoriginex;
				arrayxmaxtempo = arrayxmin[numdynamiquetablette] + Math.abs(lalargeurgraphique / scalex);
				arrayymin[numdynamiquetablette] = y1touch - Math.abs((y2touch - y1touch) * ((1 - margey) * hauteurcanvasgr[numdynamiquetablette] - y1touchfinsansconversion) / (y2touchfinsansconversion - y1touchfinsansconversion));
				scaley = ecartnewy / ecartoriginey;
				arrayymax[numdynamiquetablette] = arrayymin[numdynamiquetablette] + Math.abs(lahauteurgraphique / scaley);
				for (j = 0; j < getA.length; j++) {
					encourspinchcourbe = true;
					if (getA[j] == "1") {
						if (j != getC) {
							contextgraph[j].clearRect(0, 0, cvgraph[j].width, cvgraph[j].height);
							contextdynamique[j].clearRect(0, 0, cvdynamique[j].width, cvdynamique[j].height);
							arrayxmax[j] = arrayxmaxtempo;
							arrayxmin[j] = arrayxmintempo;
							traceaxesetcourbes(j, arrayxmin[j], arrayxmax[j], arrayymin[j], arrayymax[j]);
						}
					}
				}
				encourspinchcourbe = false;
			}
		}
		leschartdynamiques[i].addEventListener('mouseleave', e => {
			numdynamique = e.target.getAttribute("data-numcanvas");
			afficheflechedynamique = -1;
			for (j = 0; j < getA.length; j++) {
				encourspinchcourbe = true;
				if (getA[j] == "1") {
					if (j != getC) {
						contextgraph[j].clearRect(0, 0, cvgraph[j].width, cvgraph[j].height);
						contextdynamique[j].clearRect(0, 0, cvdynamique[j].width, cvdynamique[j].height);
						traceaxesetcourbes(j, arrayxmin[j], arrayxmax[j], arrayymin[j], arrayymax[j]);
					}
				}
			}
			petitesflechesdejaffichees = false;
		})
		leschartdynamiques[i].addEventListener('mousemove', e => {
			numdynamique = e.target.getAttribute("data-numcanvas");
			afficheflechedynamique = numdynamique;
			if (!petitesflechesdejaffichees) {
				for (j = 0; j < getA.length; j++) {
					encourspinchcourbe = true;
					if (getA[j] == "1") {
						if (j != getC) {
							contextgraph[j].clearRect(0, 0, cvgraph[j].width, cvgraph[j].height);
							contextdynamique[j].clearRect(0, 0, cvdynamique[j].width, cvdynamique[j].height);
							traceaxesetcourbes(j, arrayxmin[j], arrayxmax[j], arrayymin[j], arrayymax[j]);
						}
					}
				}
				petitesflechesdejaffichees = true;
			}
			rect = e.target.getBoundingClientRect();
			x = e.clientX - rect.left;
			y = e.clientY - rect.top;
			x = (x / cvgraph[numdynamique].offsetWidth) * largeurcanvasgr[numdynamique];
			y = (y / cvgraph[numdynamique].offsetHeight) * hauteurcanvasgr[numdynamique];
			if ((x > largeurcanvasgr[numdynamique] * margex) && (x < largeurcanvasgr[numdynamique] * (1 - margex)) && (y > hauteurcanvasgr[numdynamique] * margey) && (y < hauteurcanvasgr[numdynamique] * (1 - margey))) {
				if (reglagezoomencours) {
					pointfinalzoom = {
						x: x,
						y: y
					};
				} else {
					coordsouris = xmouseverscourbe(numdynamique, x, y);
					oldpointbrillant = numpointbrillant;
					numpointbrillant = cherchepoint(numdynamique, coordsouris.x, coordsouris.y);
					if (oldpointprillant !== numpointbrillant) {
						affichetooltip = true;
						affichagevaleurgraphtooltip.style.display = "inline-block ";
					}
				}
			}
		})
		leschartdynamiques[i].addEventListener('mousedown', e => {
			numdynamique = e.target.getAttribute("data-numcanvas");
			lecvlorsduzoom = numdynamique;
			rect = e.target.getBoundingClientRect();
			x = e.clientX - rect.left;
			y = e.clientY - rect.top;
			x = (x / cvgraph[numdynamique].offsetWidth) * largeurcanvasgr[numdynamique];
			y = (y / cvgraph[numdynamique].offsetHeight) * hauteurcanvasgr[numdynamique];
			if ((x > largeurcanvasgr[numdynamique] * margex) && (x < largeurcanvasgr[numdynamique] * (1 - margex)) && (y > hauteurcanvasgr[numdynamique] * margey) && (y < hauteurcanvasgr[numdynamique] * (1 - margey))) {
				pointoriginezoom = {
					x: x,
					y: y
				};
				pointfinalzoom = {
					x: x,
					y: y
				};
				reglagezoomencours = true;
				numcanvaszoomencours = numdynamique;
			}
			if ((x > largeurcanvasgr[numdynamique] * (1 - 2 * margex)) && (y > hauteurcanvasgr[numdynamique] * (1 - margey))) {
				nouvelxmax = arrayxmax[numdynamique] + (arrayxmax[numdynamique] - arrayxmin[numdynamique]) * 0.5;
				for (j = 0; j < getA.length; j++)
					if (getA[j] == "1") {
						if (j != getC) {
							arrayxmax[j] = nouvelxmax;
							if (nouvelxmax - arrayxmin[j] > maxdelta) arrayxmin[j] = arrayxmax[j] - maxdelta;
							contextgraph[j].clearRect(0, 0, cvgraph[j].width, cvgraph[j].height);
							contextdynamique[j].clearRect(0, 0, cvdynamique[j].width, cvdynamique[j].height);
							traceaxesetcourbes(j, arrayxmin[j], arrayxmax[j], arrayymin[j], arrayymax[j]);
						}
					}
			}
			if ((x < largeurcanvasgr[numdynamique] * (3 * margex)) && (y > hauteurcanvasgr[numdynamique] * (1 - margey))) {
				nouvelxmin = arrayxmin[numdynamique] - (arrayxmax[numdynamique] - arrayxmin[numdynamique]) * 0.5;
				for (j = 0; j < getA.length; j++)
					if (getA[j] == "1") {
						if (j != getC) {
							arrayxmin[j] = nouvelxmin;
							contextgraph[j].clearRect(0, 0, cvgraph[j].width, cvgraph[j].height);
							contextdynamique[j].clearRect(0, 0, cvdynamique[j].width, cvdynamique[j].height);
							traceaxesetcourbes(j, arrayxmin[j], arrayxmax[j], arrayymin[j], arrayymax[j]);
						}
					}
			}
			if ((x < largeurcanvasgr[numdynamique] * (margex)) && (y < hauteurcanvasgr[numdynamique] * (1 - margey)) && (y > hauteurcanvasgr[numdynamique] * (1 - 3 * margey))) {
				arrayymin[numdynamique] = arrayymin[numdynamique] - (arrayymax[numdynamique] - arrayymin[numdynamique]) * 0.5;
				contextgraph[numdynamique].clearRect(0, 0, cvgraph[numdynamique].width, cvgraph[numdynamique].height);
				contextdynamique[numdynamique].clearRect(0, 0, cvdynamique[numdynamique].width, cvdynamique[numdynamique].height);
				traceaxesetcourbes(numdynamique, arrayxmin[numdynamique], arrayxmax[numdynamique], arrayymin[numdynamique], arrayymax[numdynamique]);
			}
			if ((x < largeurcanvasgr[numdynamique] * (margex)) && (y < hauteurcanvasgr[numdynamique] * (3 * margey))) {
				arrayymax[numdynamique] = arrayymax[numdynamique] + (arrayymax[numdynamique] - arrayymin[numdynamique]) * 0.5;
				if ((arrayymax[numdynamique] - arrayymin[numdynamique]) > maxdelta) arrayymin[numdynamique] = arrayymax[numdynamique] - maxdelta;
				contextgraph[numdynamique].clearRect(0, 0, cvgraph[numdynamique].width, cvgraph[numdynamique].height);
				contextdynamique[numdynamique].clearRect(0, 0, cvdynamique[numdynamique].width, cvdynamique[numdynamique].height);
				traceaxesetcourbes(numdynamique, arrayxmin[numdynamique], arrayxmax[numdynamique], arrayymin[numdynamique], arrayymax[numdynamique]);
			}
		})
		leschartdynamiques[i].addEventListener('mouseup', e => {
			numdynamique = e.target.getAttribute("data-numcanvas");
			rect = e.target.getBoundingClientRect();
			x = e.clientX - rect.left;
			y = e.clientY - rect.top;
			x = (x / cvgraph[numdynamique].offsetWidth) * largeurcanvasgr[numdynamique];
			y = (y / cvgraph[numdynamique].offsetHeight) * hauteurcanvasgr[numdynamique];
			if (reglagezoomencours) {
				reglagezoomencours = false;
				pointzoom1 = xmouseverscourbe(lecvlorsduzoom, pointoriginezoom.x, pointoriginezoom.y);
				pointzoom2 = xmouseverscourbe(lecvlorsduzoom, pointfinalzoom.x, pointfinalzoom.y);
				if ((Math.abs((pointfinalzoom.x - pointoriginezoom.x) / largeurcanvasgr[numdynamique]) > 0.005) && (Math.abs((pointfinalzoom.y - pointoriginezoom.y) / hauteurcanvasgr[numdynamique]) > 0.005)) {
					arrayymax[lecvlorsduzoom] = Math.max(pointzoom1.y, pointzoom2.y);
					arrayymin[lecvlorsduzoom] = Math.min(pointzoom1.y, pointzoom2.y);
					for (j = 0; j < getA.length; j++)
						if (getA[j] == "1") {
							if (j != getC) {
								arrayxmin[j] = Math.min(pointzoom1.x, pointzoom2.x);
								arrayxmax[j] = Math.max(pointzoom1.x, pointzoom2.x);
								contextgraph[j].clearRect(0, 0, cvgraph[j].width, cvgraph[j].height);
								contextdynamique[j].clearRect(0, 0, cvdynamique[j].width, cvdynamique[j].height);
								traceaxesetcourbes(j, arrayxmin[j], arrayxmax[j], arrayymin[j], arrayymax[j]);
							}
						}
				}
			}
		})
	}
}

function affichemodalscreencap() {
	modalcaptureecran.style.display = "block";
}

function screencap() {
	typedecapture = document.querySelector('input[name=captureecran]:checked').value;
	cvtrajectoire = document.getElementById("cv1");
	switch (typedecapture) {
		case 'transparent':
			var dataURL = cvtrajectoire.toDataURL('image/png');
			var link = document.createElement('a');
			link.download = 'Screenshot.png';
			link.href = dataURL;
			link.click();
			break;
		case 'blanc':
		case 'noir':
			couleurfond = '#FFFFFF';
			if (typedecapture == "blanc") couleurfond = '#FFFFFF';
			if (typedecapture == "noir") couleurfond = '#000000';
			destinationCanvas = document.createElement("canvas");
			destinationCanvas.width = cvtrajectoire.width;
			destinationCanvas.height = cvtrajectoire.height;
			destCtx = destinationCanvas.getContext('2d');
			destCtx.beginPath();
			destCtx.rect(0, 0, cvtrajectoire.width, cvtrajectoire.height);
			destCtx.fillStyle = couleurfond;
			destCtx.fill();
			destCtx.drawImage(cvtrajectoire, 0, 0);
			destinationCanvas.toDataURL();
			var dataURL = destinationCanvas.toDataURL('image/png');
			var link = document.createElement('a');
			link.download = 'Screenshot.png';
			link.href = dataURL;
			link.click();
			break;
		case 'incruste':
			videopourcapture = document.getElementById('monfilm');
			destinationCanvas = document.createElement("canvas");
			destinationCanvas.width = cvtrajectoire.width;
			destinationCanvas.height = cvtrajectoire.height;
			destCtx = destinationCanvas.getContext('2d');
			destCtx.drawImage(videopourcapture, 0, 0, videopourcapture.videoWidth, videopourcapture.videoHeight, 0, 0, cvtrajectoire.width, cvtrajectoire.height);
			destCtx.drawImage(cvtrajectoire, 0, 0);
			destinationCanvas.toDataURL();
			var dataURL = destinationCanvas.toDataURL('image/png');
			var link = document.createElement('a');
			link.download = 'Screenshot.png';
			link.href = dataURL;
			link.click();
			break;
	}
}

function exportpng() {
	cvchart = document.getElementById("chartmeca");
	destinationCanvas = document.createElement("canvas");
	largeurpng = 0;
	nbgraph = 0;
	margepng = 80;
	hauteurpng = 2 * margepng;
	for (j = 0; j < getA.length; j++)
		if (getA[j] == "1") {
			if (j != getC) {
				nbgraph++;
				if (nbgraph % 2) hauteurpng += cvgraph[j].height;
				largeurpng = cvgraph[j].width + margepng;
			}
		}
	if (nbgraph == 0) return;
	if (nbgraph > 1) largeurpng = largeurpng * 2 + margepng;
	else largeurpng += margepng;
	destinationCanvas.width = largeurpng;
	destinationCanvas.height = hauteurpng;
	destCtx = destinationCanvas.getContext('2d');
	gradient = destCtx.createLinearGradient(0, 0, largeurpng, hauteurpng);
	gradient.addColorStop(0, '#6f7273');
	gradient.addColorStop(1, '#404040');
	destCtx.fillStyle = gradient;
	destCtx.fillRect(0, 0, largeurpng, hauteurpng);
	nbgraph = 0;
	for (j = 0; j < getA.length; j++)
		if (getA[j] == "1") {
			if (j != getC) {
				nbgraph++;
				destCtx.drawImage(cvgraph[j], margepng + ((nbgraph - 1) % 2) * (cvgraph[j].width + margepng), margepng + Math.trunc((nbgraph - 1) / 2) * cvgraph[j].height);
				destCtx.drawImage(cvdynamique[j], margepng + ((nbgraph - 1) % 2) * (cvgraph[j].width + margepng), margepng + Math.trunc((nbgraph - 1) / 2) * cvgraph[j].height);
			}
		}
	destinationCanvas.toDataURL();
	var dataURL = destinationCanvas.toDataURL('image/png');
	var link = document.createElement('a');
	link.download = 'Mecachrono.png';
	link.href = dataURL;
	link.click();
}

function flecheaxe(co, startX, startY, endX, endY, controlPoints, lacolor) {
	contextgraph[co].save();
	contextgraph[co].beginPath();
	contextgraph[co].fillStyle = lacolor;
	contextgraph[co].shadowOffsetX = 0;
	contextgraph[co].shadowOffsetY = 0;
	contextgraph[co].shadowBlur = 2;
	contextgraph[co].shadowColor = 'rgba(0,0,0, 1)';
	var dx = endX - startX;
	var dy = endY - startY;
	var len = Math.sqrt(dx * dx + dy * dy);
	var sin = dy / len;
	var cos = dx / len;
	var a = [];
	a.push(0, 0);
	for (var i = 0; i < controlPoints.length; i += 2) {
		var x = controlPoints[i];
		var y = controlPoints[i + 1];
		a.push(x < 0 ? len + x : x, y);
	}
	a.push(len, 0);
	for (var i = controlPoints.length; i > 0; i -= 2) {
		var x = controlPoints[i - 2];
		var y = controlPoints[i - 1];
		a.push(x < 0 ? len + x : x, -y);
	}
	a.push(0, 0);
	for (var i = 0; i < a.length; i += 2) {
		var x = a[i] * cos - a[i + 1] * sin + startX;
		var y = a[i] * sin + a[i + 1] * cos + startY;
		if (i === 0) contextgraph[co].moveTo(x, y);
		else contextgraph[co].lineTo(x, y);
	}
	contextgraph[co].fill();
	contextgraph[co].restore();
}

function traceaxesetcourbes(co, axexmin, axexmax, axeymin, axeymax) {
	if (Math.abs(axexmax - axexmin) < mindelta) {
		arrayxmax[co] = axexmin + mindelta;
		axexmax = arrayxmax[co];
	}
	if (Math.abs(axeymax - axeymin) < mindelta) {
		arrayymax[co] = axeymin + mindelta;
		axeymax = arrayymax[co];
	}
	if (Math.abs(axexmax - axexmin) > maxdelta) {
		arrayxmax[co] = axexmin + maxdelta;
		axexmax = arrayxmax[co];
	}
	if (Math.abs(axeymax - axeymin) > maxdelta) {
		arrayymax[co] = axeymin + maxdelta;
		axeymax = arrayymax[co];
	}
	largeurcanvasgr[co] = cvgraph[co].width;
	hauteurcanvasgr[co] = cvgraph[co].height;
	deltax = (axexmax - axexmin);
	deltay = (axeymax - axeymin);
	nbintervallex = 10;
	nbintervalley = 10;
	unitex[co] = deltax / nbintervallex;
	unitey[co] = deltay / nbintervalley;
	unitex[co] = parseFloat(unitex[co].toPrecision(1));
	unitey[co] = parseFloat(unitey[co].toPrecision(1));
	vrainbintervallex = Math.trunc(deltax / unitex[co]);
	vrainbintervalley = Math.trunc(deltay / unitey[co]);
	contextgraph[co].lineWidth = 1;
	if (axeymin + vrainbintervalley * unitey[co] < axeymax) vrainbintervalley++;
	if (axexmin + vrainbintervallex * unitex[co] < axexmax) vrainbintervallex++;
	axexminentier = Math.trunc(axexmin / unitex[co]) * unitex[co];
	if (axexmin < 0) axexminentier = axexminentier - unitex[co];
	axeyminentier = Math.trunc(axeymin / unitey[co]) * unitey[co];
	if (axeymin < 0) axeyminentier = axeyminentier - unitey[co];
	echellex[co] = ((axexmax - axexmin) / largeurcanvasgr[co]) / (1 - 2.5 * margex);
	echelley[co] = ((axeymax - axeymin) / hauteurcanvasgr[co]) / (1 - 2.5 * margey);
	depassegraduationy = unitey[co] * 0.1;
	depassegraduationx = unitex[co] * 0.1 * hauteurcanvasgr[co] / largeurcanvasgr[co];
	contextgraph[co].save();
	contextgraph[co].strokeStyle = '#000';
	flecheaxe(co, margex * largeurcanvasgr[co], (1 - margey * 0.9) * hauteurcanvasgr[co], margex * largeurcanvasgr[co], (margey / 2) * hauteurcanvasgr[co], [0, 1, -10, 1, -10, 5], '#fff');
	flecheaxe(co, (0.95 * margex) * largeurcanvasgr[co], (1 - margey) * hauteurcanvasgr[co], (1 - margex * 3 / 4) * largeurcanvasgr[co], (1 - margey) * hauteurcanvasgr[co], [0, 1, -10, 1, -10, 5], '#fff');
	if (co == afficheflechedynamique) {
		facteur = largeurcanvasgr[co] * 0.0005 + 0.2;
		flecheaxe(co, (1.6 * margex) * largeurcanvasgr[co], (1 - 0.4 * margey) * hauteurcanvasgr[co], (margex * 1.2) * largeurcanvasgr[co], (1 - margey * 0.4) * hauteurcanvasgr[co], [0, 7 * facteur, 4 * facteur, 7 * facteur, 4 * facteur, 2, -20 * facteur, 2, -20 * facteur, 10 * facteur], '#fff');
		flecheaxe(co, (1 - 2 * margex) * largeurcanvasgr[co], (1 - 0.4 * margey) * hauteurcanvasgr[co], (1 - margex * 1.6) * largeurcanvasgr[co], (1 - margey * 0.4) * hauteurcanvasgr[co], [0, 7 * facteur, 4 * facteur, 7 * facteur, 4 * facteur, 2, -20 * facteur, 2, -20 * facteur, 10 * facteur], '#fff');
		flecheaxe(co, 0.3 * margex * largeurcanvasgr[co], (1 - margey * 1.6) * hauteurcanvasgr[co], 0.3 * margex * largeurcanvasgr[co], (1 - margey * 1.2) * hauteurcanvasgr[co], [0, 7 * facteur, 4 * facteur, 7 * facteur, 4 * facteur, 2, -20 * facteur, 2, -20 * facteur, 10 * facteur], '#fff');
		flecheaxe(co, 0.3 * margex * largeurcanvasgr[co], (margey * 1.6) * hauteurcanvasgr[co], 0.3 * margex * largeurcanvasgr[co], (margey * 1.2) * hauteurcanvasgr[co], [0, 7 * facteur, 4 * facteur, 7 * facteur, 4 * facteur, 2, -20 * facteur, 2, -20 * facteur, 10 * facteur], '#fff');
	}
	fontsizelabel = 40;
	contextgraph[co].font = fontsizelabel + "px Arial";
	contextgraph[co].fillStyle = "#fff";
	contextgraph[co].textAlign = "center";
	contextgraph[co].textBaseline = "bottom";
	longueurmot = contextgraph[co].measureText(jolinompropr[0]).width;
	if (longueurmot > ((largeurcanvasgr[co] * (1 - 2 * margex)) / 8))
		do {
			fontsizelabel = fontsizelabel * 0.9;
			contextgraph[co].font = fontsizelabel + "px Arial";
		} while (contextgraph[co].measureText(jolinompropr[0]).width > ((largeurcanvasgr[co] * (1 - 2 * margex)) / 8));
	contextgraph[co].fillText(jolinompropr[getC], (1 - margex * 1 / 2) * largeurcanvasgr[co], (1 - margey * 0.5) * hauteurcanvasgr[co]);
	contextgraph[co].textAlign = "right";
	contextgraph[co].textBaseline = "bottom";
	contextgraph[co].fillText(jolinompropr[co], 1.1 * margex * largeurcanvasgr[co], (margey * 0.4) * hauteurcanvasgr[co]);
	fontsizenombre = 20;
	contextgraph[co].font = fontsizenombre + "px Arial";
	contextgraph[co].fillStyle = "#eee";
	contextgraph[co].textBaseline = "top";
	contextgraph[co].textAlign = "center";
	longueurmot = contextgraph[co].measureText((axexminentier).toPrecision(3)).width;
	if (longueurmot > ((largeurcanvasgr[co] * (1 - 2 * margex)) / 14))
		do {
			fontsizenombre = fontsizenombre * 0.9;
			contextgraph[co].font = fontsizenombre + "px Arial";
		} while (contextgraph[co].measureText((axexminentier).toPrecision(3)).width > ((largeurcanvasgr[co] * (1 - 2 * margex)) / 14));
	for (xi = 1; xi < (vrainbintervallex + 1); xi++) {
		contextgraph[co].fillText((axexminentier + xi * unitex[co]).toPrecision(3), margex * largeurcanvasgr[co] + (axexminentier - axexmin) / echellex[co] + xi * unitex[co] / echellex[co], (1 - margey * 0.8) * hauteurcanvasgr[co]);
	}
	contextgraph[co].textAlign = "right";
	contextgraph[co].textBaseline = "middle";
	for (yi = 1; yi < (vrainbintervalley + 1); yi++) {
		contextgraph[co].fillText((axeyminentier + yi * unitey[co]).toPrecision(3), margex * 0.94 * largeurcanvasgr[co], (1 - margey) * hauteurcanvasgr[co] - (axeyminentier - axeymin) / echelley[co] - yi * unitey[co] / echelley[co]);
	}
	contextgraph[co].restore();
	contextgraph[co].save();
	contextgraph[co].setTransform(1 / echellex[co], 0, 0, -1 / echelley[co], margex * largeurcanvasgr[co] - axexmin / echellex[co], (1 - margey) * hauteurcanvasgr[co] + axeymin / echelley[co]);
	contextgraph[co].beginPath();
	for (xi = 1; xi < (vrainbintervallex + 1); xi++) {
		contextgraph[co].moveTo(axexminentier + xi * unitex[co], axeymin - depassegraduationy);
		contextgraph[co].lineTo(axexminentier + xi * unitex[co], axeymin + vrainbintervalley * unitey[co]);
	}
	for (yi = 1; yi < (vrainbintervalley + 1); yi++) {
		contextgraph[co].moveTo(axexmin - depassegraduationx, axeyminentier + yi * unitey[co]);
		contextgraph[co].lineTo(axexmin + vrainbintervallex * unitex[co], axeyminentier + yi * unitey[co]);
	}
	contextgraph[co].restore();
	contextgraph[co].strokeStyle = '#ccc';
	contextgraph[co].stroke();
	contextgraph[co].save();
	contextgraph[co].beginPath();
	contextgraph[co].rect(margex * largeurcanvasgr[co], margey * hauteurcanvasgr[co], (1 - 2 * margex) * largeurcanvasgr[co], (1 - 2 * margey) * hauteurcanvasgr[co]);
	contextgraph[co].clip();
	contextgraph[co].save();
	contextgraph[co].beginPath();
	drawSplinesgrperso(co);
	contextgraph[co].restore();
	contextgraph[co].lineWidth = 3;
	contextgraph[co].strokeStyle = listecouleur[co];
	contextgraph[co].stroke();
	contextgraph[co].save();
	contextgraph[co].beginPath();
	contextgraph[co].fillStyle = listecouleur[co];
	diametrepoint = Math.min(largeurcanvasgr[co] / 120, hauteurcanvasgr[co] / 120);
	for (i = 0; i < laliste.length; i++) {
		contextgraph[co].beginPath();
		contextgraph[co].arc(margex * largeurcanvasgr[co] + (lesvalueabscisse[i] - axexmin) / echellex[co], (1 - margey) * hauteurcanvasgr[co] - (touteslesvalue[co][i] - axeymin) / echelley[co], diametrepoint, 0, 6.284);
		contextgraph[co].fill();
	}
	contextgraph[co].restore();
	contextgraph[co].restore();
}

function detectdimensionbrowser() {
	return {
		width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
		height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
	};
}
browser_dims = detectdimensionbrowser();

function inittaillevideo() {
	if (largeurvw < 10) largeurvw = 10;
	if (largeurvw > 80) largeurvw = 80;
	document.getElementById("cv1").style.cssText += ';width:' + largeurvw + 'vw !important;';
	document.getElementById("monfilmloupe").style.cssText += ';width:' + largeurvw + 'vw !important;';
	document.getElementById("monfilm").style.cssText += ';width:' + largeurvw + 'vw !important;';
	document.getElementById("videoCont").style.cssText += ';width:' + largeurvw + 'vw !important;';
	margevw = (100 - 20 - largeurvw) / 2;
	document.getElementById("videoCont").style.margin = "12px " + margevw + "vw 6px " + margevw + "vw";
	rayonc = (Math.min(vid.offsetWidth, vid.offsetHeight)) / 4;
	document.getElementById("divloupecapsule").style.cssText += ';width:' + 2 * rayonc + 'px !important;height:' + 2 * rayonc + 'px !important;';
	document.getElementById('loupemoinsgauche').style.cssText += ";left:" + (cv.getBoundingClientRect().left - document.getElementById('moncontainer').getBoundingClientRect().left - 25) + "px;";
	document.getElementById('loupeplusgauche').style.cssText += ";left:" + (cv.getBoundingClientRect().left - document.getElementById('moncontainer').getBoundingClientRect().left - 25) + "px;";
	document.getElementById('reglagecouleurgauchepico').style.cssText += ";left:" + (cv.getBoundingClientRect().left - document.getElementById('moncontainer').getBoundingClientRect().left - 25) + "px;";
}
document.getElementById("loupemoinsgauche").addEventListener("click", function() {
	largeurvw -= 10;
	inittaillevideo();
})
document.getElementById("loupeplusgauche").addEventListener("click", function() {
	largeurvw += 10;
	inittaillevideo();
})

function initplusfondgraphique() {
	if (videochargee) {
		initcanvas();
		if ((laliste.length > 0) && (echelledejadefinie)) creertramefondgraphique();
		inittaillevideo();
		infofps.style.right = document.getElementById("monfilm").offsetLeft + 'px';;
		infotime.style.left = document.getElementById("monfilm").offsetLeft + 'px';
	}
}
window.addEventListener('resize', initplusfondgraphique, false);
window.addEventListener('orientationchange', initplusfondgraphique, false);

function initcanvas() {
	lescontainersgraph = document.querySelectorAll('.containercanvasgraph');
	for (var i = 0; i < lescontainersgraph.length; i++) {
		lescontainersgraph[i].style.display = 'block';
	}
	if ((getA[0] == "1") && (0 != getC)) {
		cvgraph[0] = document.getElementById("canvast");
		contextgraph[0] = cvgraph[0].getContext('2d');
		cvdynamique[0] = document.getElementById("canvdynamiquet");
		contextdynamique[0] = cvdynamique[0].getContext('2d');
	} else document.getElementById("idcontcanv0").style.display = "none";
	if ((getA[1] == "1") && (1 != getC)) {
		cvgraph[1] = document.getElementById("canvasx");
		contextgraph[1] = cvgraph[1].getContext('2d');
		cvdynamique[1] = document.getElementById("canvdynamiquex");
		contextdynamique[1] = cvdynamique[1].getContext('2d');
	} else document.getElementById("idcontcanv1").style.display = "none";
	if ((getA[2] == "1") && (2 != getC)) {
		cvgraph[2] = document.getElementById("canvasy");
		contextgraph[2] = cvgraph[2].getContext('2d');
		cvdynamique[2] = document.getElementById("canvdynamiquey");
		contextdynamique[2] = cvdynamique[2].getContext('2d');
	} else document.getElementById("idcontcanv2").style.display = "none";
	if ((getA[3] == "1") && (3 != getC)) {
		cvgraph[3] = document.getElementById("canvasvx");
		contextgraph[3] = cvgraph[3].getContext('2d');
		cvdynamique[3] = document.getElementById("canvdynamiquevx");
		contextdynamique[3] = cvdynamique[3].getContext('2d');
	} else document.getElementById("idcontcanv3").style.display = "none";
	if ((getA[4] == "1") && (4 != getC)) {
		cvgraph[4] = document.getElementById("canvasvy");
		contextgraph[4] = cvgraph[4].getContext('2d');
		cvdynamique[4] = document.getElementById("canvdynamiquevy");
		contextdynamique[4] = cvdynamique[4].getContext('2d');
	} else document.getElementById("idcontcanv4").style.display = "none";
	if ((getA[5] == "1") && (5 != getC)) {
		cvgraph[5] = document.getElementById("canvasv");
		contextgraph[5] = cvgraph[5].getContext('2d');
		cvdynamique[5] = document.getElementById("canvdynamiquev");
		contextdynamique[5] = cvdynamique[5].getContext('2d');
	} else document.getElementById("idcontcanv5").style.display = "none";
	if ((getA[6] == "1") && (6 != getC)) {
		cvgraph[6] = document.getElementById("canvasax");
		contextgraph[6] = cvgraph[6].getContext('2d');
		cvdynamique[6] = document.getElementById("canvdynamiqueax");
		contextdynamique[6] = cvdynamique[6].getContext('2d');
	} else document.getElementById("idcontcanv6").style.display = "none";
	if ((getA[7] == "1") && (7 != getC)) {
		cvgraph[7] = document.getElementById("canvasay");
		contextgraph[7] = cvgraph[7].getContext('2d');
		cvdynamique[7] = document.getElementById("canvdynamiqueay");
		contextdynamique[7] = cvdynamique[7].getContext('2d');
	} else document.getElementById("idcontcanv7").style.display = "none";
	if ((getA[8] == "1") && (8 != getC)) {
		cvgraph[8] = document.getElementById("canvasa");
		contextgraph[8] = cvgraph[8].getContext('2d');
		cvdynamique[8] = document.getElementById("canvdynamiquea");
		contextdynamique[8] = cvdynamique[8].getContext('2d');
	} else document.getElementById("idcontcanv8").style.display = "none";
	if ((getA[9] == "1") && (9 != getC)) {
		cvgraph[9] = document.getElementById("canvasEc");
		contextgraph[9] = cvgraph[9].getContext('2d');
		cvdynamique[9] = document.getElementById("canvdynamiqueEc");
		contextdynamique[9] = cvdynamique[9].getContext('2d');
	} else document.getElementById("idcontcanv9").style.display = "none";
	if ((getA[10] == "1") && (10 != getC)) {
		cvgraph[10] = document.getElementById("canvasEp");
		contextgraph[10] = cvgraph[10].getContext('2d');
		cvdynamique[10] = document.getElementById("canvdynamiqueEp");
		contextdynamique[10] = cvdynamique[10].getContext('2d');
	} else document.getElementById("idcontcanv10").style.display = "none";
	if ((getA[11] == "1") && (11 != getC)) {
		cvgraph[11] = document.getElementById("canvasEm");
		contextgraph[11] = cvgraph[11].getContext('2d');
		cvdynamique[11] = document.getElementById("canvdynamiqueEm");
		contextdynamique[11] = cvdynamique[11].getContext('2d');
	} else document.getElementById("idcontcanv11").style.display = "none";
	for (co = 0; co < cvgraph.length; co++) {
		if (getA[co] == "1")
			if (co != getC) {
				cvgraph[co].style.width = '100%';
				cvgraph[co].style.height = '100%';
				cvgraph[co].width = cvgraph[co].offsetWidth * resolutiongraph;
				cvgraph[co].height = cvgraph[co].offsetHeight * resolutiongraph;
				cvdynamique[co].style.width = '100%';
				cvdynamique[co].style.height = '100%';
				cvdynamique[co].width = cvdynamique[co].offsetWidth * resolutiongraph;
				cvdynamique[co].height = cvdynamique[co].offsetHeight * resolutiongraph;
				cvdynamique[co].offsetTop = cvgraph[co].offsetTop;
			}
	}
}

function distagrperso(arr, i, j) {
	return Math.sqrt(Math.pow(arr[2 * i] - arr[2 * j], 2) + Math.pow(arr[2 * i + 1] - arr[2 * j + 1], 2));
}

function vagrperso(arr, i, j) {
	return [arr[2 * j] - arr[2 * i], arr[2 * j + 1] - arr[2 * i + 1]]
}

function ctlptsgrperso(x1, y1, x2, y2, x3, y3) {
	var t = 0.4;
	var v = vagrperso(arguments, 0, 2);
	var d01 = distagrperso(arguments, 0, 1);
	var d12 = distagrperso(arguments, 1, 2);
	var d012 = d01 + d12;
	return [x2 - v[0] * t * d01 / d012, y2 - v[1] * t * d01 / d012,
		x2 + v[0] * t * d12 / d012, y2 + v[1] * t * d12 / d012
	];
}

function drawSplinesgrperso(co) {
	cps = [];
	pts = [];
	for (var i = 0; i < touteslesvalue[co].length; i++) {
		if ((touteslesvalue[co][i] !== undefined) && (lesvalueabscisse[i] !== undefined)) {
			valeurdanscv = xcourbeverscanvas(co, lesvalueabscisse[i], touteslesvalue[co][i])
			pts.push(valeurdanscv.x);
			pts.push(valeurdanscv.y);
		}
	}
	for (var i = 0; i < pts.length - 2; i += 1) {
		cps = cps.concat(ctlptsgrperso(pts[2 * i], pts[2 * i + 1], pts[2 * i + 2], pts[2 * i + 3], pts[2 * i + 4], pts[2 * i + 5]));
	}
	drawCurvedPathgrperso(co, cps, pts);
}

function drawCurvedPathgrperso(co, cps, pts) {
	var len = pts.length / 2;
	if (len < 2) return;
	if (len == 2) {
		contextgraph[co].moveTo(pts[0], pts[1]);
		contextgraph[co].lineTo(pts[2], pts[3]);
	} else {
		contextgraph[co].moveTo(pts[0], pts[1]);
		contextgraph[co].quadraticCurveTo(cps[0], cps[1], pts[2], pts[3]);
		for (var i = 2; i < len - 1; i += 1) {
			contextgraph[co].bezierCurveTo(cps[(2 * (i - 1) - 1) * 2], cps[(2 * (i - 1) - 1) * 2 + 1], cps[(2 * (i - 1)) * 2], cps[(2 * (i - 1)) * 2 + 1], pts[i * 2], pts[i * 2 + 1]);
		}
		contextgraph[co].quadraticCurveTo(cps[(2 * (i - 1) - 1) * 2], cps[(2 * (i - 1) - 1) * 2 + 1], pts[i * 2], pts[i * 2 + 1]);
	}
}

function creertramefondgraphique() {
	touteslesvalue = [];
	lesvalueabscisse = [];
	lesmin = [];
	lesextremetrouve = Array(getA.length - 1).fill(false);
	lesmax = [];
	extremeabscitrouve = false;
	lalistedevaleur = [];
	for (j = 0; j < getA.length; j++)
		if (getA[j] == "1") {
			if (j != getC) {
				touteslesvalue[j] = [];
				lalistedevaleur.push(j);
			}
		}
	for (i = 0; i < laliste.length; i++) {
		lesvalueabscisse[i] = laliste[i][essaienompropr[getC]];
		if (lesvalueabscisse[i] !== undefined) {
			if (!extremeabscitrouve) {
				minabscisse = lesvalueabscisse[i];
				maxabscisse = lesvalueabscisse[i];
				extremeabscitrouve = true;
			} else {
				if (minabscisse > lesvalueabscisse[i]) minabscisse = lesvalueabscisse[i];
				if (maxabscisse < lesvalueabscisse[i]) maxabscisse = lesvalueabscisse[i];
			}
		}
		for (tempo = 0; tempo < lalistedevaleur.length; tempo++) {
			if (laliste[i][essaienompropr[lalistedevaleur[tempo]]] !== undefined) {
				touteslesvalue[lalistedevaleur[tempo]][i] = laliste[i][essaienompropr[lalistedevaleur[tempo]]];
				if (!lesextremetrouve[lalistedevaleur[tempo]]) {
					lesmin[lalistedevaleur[tempo]] = laliste[i][essaienompropr[lalistedevaleur[tempo]]];
					lesmax[lalistedevaleur[tempo]] = laliste[i][essaienompropr[lalistedevaleur[tempo]]];
					lesextremetrouve[lalistedevaleur[tempo]] = true;
				} else {
					if (lesmin[lalistedevaleur[tempo]] > laliste[i][essaienompropr[lalistedevaleur[tempo]]]) lesmin[lalistedevaleur[tempo]] = laliste[i][essaienompropr[lalistedevaleur[tempo]]];
					if (lesmax[lalistedevaleur[tempo]] < laliste[i][essaienompropr[lalistedevaleur[tempo]]]) lesmax[lalistedevaleur[tempo]] = laliste[i][essaienompropr[lalistedevaleur[tempo]]];
				}
			}
		}
	}
	if (extremeabscitrouve) {
		tmax = laliste[laliste.length - 1].tremisazero;
		tmin = laliste[0].tremisazero;
		coordmax = Math.max(calculxmax, calculymax);
		coordmin = Math.min(calculxmin, calculymin);
		vmax = calculvreelmax;
		vmin = calculvreelmin;
		amax = calculamax;
		amin = calculamin;
		axexmin = minabscisse;
		axexmax = maxabscisse;
		axexmin = axexmin - (axexmax - axexmin) * 0.1;
		axexmax = axexmax + (axexmax - axexmin) * 0.1;
		for (co = 0; co < getA.length; co++) {
			if (getA[co] == "1")
				if (co != getC) {
					contextgraph[co].clearRect(0, 0, cvgraph[co].width, cvgraph[co].height);
					arrayxmin[co] = axexmin;
					arrayxmax[co] = axexmax;
					arrayymin[co] = lesmin[co];
					arrayymax[co] = lesmax[co];
					arrayymin[co] = arrayymin[co] - 0.1 * (arrayymax[co] - arrayymin[co]);
					arrayymax[co] = arrayymax[co] + 0.1 * (arrayymax[co] - arrayymin[co]);
					traceaxesetcourbes(co, arrayxmin[co], arrayxmax[co], arrayymin[co], arrayymax[co]);
				}
		}
		axeyt = false;
		axeyxy = false;
		axeyv = false;
		axeya = false;
		premiereposition = true;
		cote = 'left';
	}
}

function openOnglet(evt, ongletName) {
	var i, tabcontent, tablinks;
	ongletencours = ongletName;
	tabcontent = document.getElementsByClassName("classonglet");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(ongletName).style.display = "block";
	evt.currentTarget.className += " active";
	if (ongletencours == "onglettableau") {
		if (laliste.length == 0) {
			document.getElementById("infopasdelistetab").style.display = "block";
			document.getElementById("papadivtabulator").style.display = "none";
			document.getElementById("infopasdechelletab").style.display = "none";
		} else {
			document.getElementById("infopasdelistetab").style.display = "none";
			if (echelledejadefinie) {
				document.getElementById("papadivtabulator").style.display = "block";
				document.getElementById("infopasdechelletab").style.display = "none";
				setTimeout(table.redraw(), 200);
			} else {
				document.getElementById("papadivtabulator").style.display = "none";
				document.getElementById("infopasdechelletab").style.display = "block";
			}
		}
	}
	if (ongletencours == "ongletgraphique2") {
		if (laliste.length == 0) {
			document.getElementById("idchartcontain").style.display = "none";
			document.getElementById("infopasdechellegraph").style.display = "none";
			document.getElementById("infopasdelistegraph").style.display = "block";
		} else {
			document.getElementById("infopasdelistegraph").style.display = "none";
			if (echelledejadefinie) {
				document.getElementById("idchartcontain").style.display = "grid";
				document.getElementById("infopasdechellegraph").style.display = "none";
				if (!dejainitcanvas) {
					initcanvas();
					dejainitcanvas = true;
					creertramefondgraphique();
					initchartdynamique();
					window.requestAnimationFrame(surbrillance);
				} else initconfig();
			} else {
				document.getElementById("idchartcontain").style.display = "none";
				document.getElementById("infopasdechellegraph").style.display = "block";
			}
		}
	}
}

function initconfig() {
	var valeursaexploit = document.querySelectorAll('#valeursaexploit input');
	lescolonnes = [{
		title: lesphrasestraduites.numero,
		field: "name",
		width: 150
	}];
	lesdatasets = [];
	lesyaxes = [];
	axeyt = false;
	axeyxy = false;
	axeyv = false;
	axeya = false;
	dropDown = document.getElementById("axehoriz-select");
	getC = dropDown.selectedIndex;
	getB = "";
	var exporttableau = document.querySelectorAll('#exportarray input');
	for (var i = 0; i < exporttableau.length; ++i) {
		if (exporttableau[i].checked) getB = getB + "1";
		else getB = getB + "0";
	}
	dropDownlang = document.getElementById("langue-select");
	getlang = dropDownlang.selectedIndex;
	if (getlang == 0) getlang = "fr";
	if (getlang == 1) getlang = "en";
	getE = "";
	var diversconfig = document.querySelectorAll('#configdivers input');
	for (var i = 0; i < diversconfig.length; ++i) {
		if (diversconfig[i].checked) getE = getE + "1";
		else getE = getE + "0";
	}
	if (getE[1] == "1") autorisationloupeconfig = false;
	else autorisationloupeconfig = true;
	if (getE[4] == "1") {
		configremiseazer = true;
		document.getElementById('idremisazero').innerHTML = '<i class="fas fa-history"></i>';
	} else {
		configremiseazer = false;
		document.getElementById('idremisazero').innerHTML = '<i class="far fa-clock"></i>';
	}
	getD = "";
	var configdesonglets = document.querySelectorAll('#ongletdispo input');
	for (var i = 0; i < configdesonglets.length; ++i) {
		if (configdesonglets[i].checked) {
			getD = getD + "1";
			switch (i) {
				case 0:
					document.getElementById("ongtab").style.display = "block";
					break;
				case 1:
					document.getElementById("onggra2").style.display = "block";
					break;
				case 2:
					document.getElementById("ongpro").style.display = "block";
					break;
				case 3:
					document.getElementById("ongconf").style.display = "block";
					break;
			}
		} else {
			getD = getD + "0";
			switch (i) {
				case 0:
					document.getElementById("ongtab").style.display = "none";
					break;
				case 1:
					document.getElementById("onggra2").style.display = "none";
					break;
				case 2:
					document.getElementById("ongpro").style.display = "none";
					break;
				case 3:
					document.getElementById("ongconf").style.display = "none";
					break;
			}
		}
	}
	getA = "";
	for (var i = 0; i < valeursaexploit.length; ++i) {
		if (valeursaexploit[i].checked) getA = getA + "1";
		else getA = getA + "0";
		if (valeursaexploit[i].checked) {
			adddatasets = undefined;
			addyaxes = undefined;
			switch (valeursaexploit[i].dataset.grandeur) {
				case 't':
					addcolonne = {
						title: lesphrasestraduites.tempsunite,
						field: "temps",
						align: "center"
					};
					break;
				case 'x':
					addcolonne = {
						title: lesphrasestraduites.xunite,
						field: "x",
						align: "center"
					};
					break;
				case 'y':
					addcolonne = {
						title: lesphrasestraduites.yunite,
						field: "y",
						align: "center"
					};
					break;
				case 'vx':
					addcolonne = {
						title: lesphrasestraduites.vxunite,
						field: "vx",
						align: "center"
					};
					break;
				case 'vy':
					addcolonne = {
						title: lesphrasestraduites.vyunite,
						field: "vy",
						align: "center"
					};
					break;
				case 'v':
					addcolonne = {
						title: lesphrasestraduites.vunite,
						field: "v",
						align: "center"
					};
					break;
				case 'ax':
					addcolonne = {
						title: lesphrasestraduites.axunite,
						field: "ax",
						align: "center"
					};
					break;
				case 'ay':
					addcolonne = {
						title: lesphrasestraduites.ayunite,
						field: "ay",
						align: "center"
					};
					break;
				case 'a':
					addcolonne = {
						title: lesphrasestraduites.aunite,
						field: "a",
						align: "center"
					};
					break;
				case 'Ec':
					addcolonne = {
						title: lesphrasestraduites.Ecunite,
						field: "Ec",
						align: "center"
					};
					break;
				case 'Ep':
					addcolonne = {
						title: lesphrasestraduites.Epunite,
						field: "Ep",
						align: "center"
					};
					break;
				case 'Em':
					addcolonne = {
						title: lesphrasestraduites.Emunite,
						field: "Em",
						align: "center"
					};
					break;
			}
			lescolonnes.push(addcolonne);
		}
	}
	if (firsttableau) table = new Tabulator("#tablepoints", {
		clipboard: true,
		height: "100%",
		data: tabledatatabulator,
		layout: "fitColumns",
		columns: lescolonnes,
	});
	else {
		table.clearData();
		firsttableau = false;
	}
	switch (getC) {
		case 0:
			labelaxex = lesphrasestraduites.tempsunite;
			break;
		case 1:
			labelaxex = lesphrasestraduites.xunite;
			break;
		case 2:
			labelaxex = lesphrasestraduites.yunite;
			break;
		case 3:
			labelaxex = lesphrasestraduites.vxunite;
			break;
		case 4:
			labelaxex = lesphrasestraduites.vyunite;
			break;
		case 5:
			labelaxex = lesphrasestraduites.vunite;
			break;
		case 6:
			labelaxex = lesphrasestraduites.axunite;
			break;
		case 7:
			labelaxex = lesphrasestraduites.ayunite;
			break;
		case 8:
			labelaxex = lesphrasestraduites.aunite;
			break;
	}
	if (firsttableau) initcanvas();
	updatearrayetgraphique();
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function dec2bin(dec) {
	return (dec >>> 0).toString(2).split("").reverse().join("");
}

function stringToHash(string) {
	var hash = 0;
	string = string + "462;-)";
	if (string.length == 0) return hash;
	for (i = 0; i < string.length; i++) {
		char = string.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash;
	}
	return hash;
}

function initcheck() {
	hashvrai = false;
	url = window.location.href;
	lesparampourh = url.substring(1 + url.indexOf("?"), url.indexOf("&H="));
	lehash = stringToHash(lesparampourh);
	getH = getParameterByName('H', url);
	if (getH !== null)
		if (getH == lehash) hashvrai = true;
	getA = getParameterByName('A', url);
	if ((getA === null) || (!hashvrai)) getA = "111000000000";
	else getA = dec2bin(getA);
	for (var i = 0; i < getA.length; ++i) {
		if (getA[i] == "1") switch (i) {
			case 0:
				document.getElementById("ckt").checked = true;
				break;
			case 1:
				document.getElementById("ckx").checked = true;
				break;
			case 2:
				document.getElementById("cky").checked = true;
				break;
			case 3:
				document.getElementById("ckvx").checked = true;
				break;
			case 4:
				document.getElementById("ckvy").checked = true;
				break;
			case 5:
				document.getElementById("ckv").checked = true;
				break;
			case 6:
				document.getElementById("ckax").checked = true;
				break;
			case 7:
				document.getElementById("ckay").checked = true;
				break;
			case 8:
				document.getElementById("cka").checked = true;
				break;
		}
	}
	getB = getParameterByName('B', url);
	if ((getB === null) || (!hashvrai)) getB = "000";
	else getB = dec2bin(getB);
	for (var i = 0; i < getB.length; ++i) {
		if (getB[i] == "1") switch (i) {
			case 0:
				document.getElementById("ckentete").checked = true;
				break;
			case 1:
				document.getElementById("ckvirgule").checked = true;
				break;
			case 2:
				document.getElementById("ckseparationcsv").checked = true;
				break;
		}
	}
	getE = getParameterByName('E', url);
	if ((getE === null) || (!hashvrai)) getE = "00100";
	else getE = dec2bin(getE);
	for (var i = 0; i < getE.length; ++i) {
		if (getE[i] == "1") switch (i) {
			case 0:
				document.getElementById("ckloupedecalee").checked = true;
				break;
			case 1:
				document.getElementById("ckloupeinterdit").checked = true;
				break;
			case 2:
				document.getElementById("ckaffichepresentation").checked = true;
				break;
			case 3:
				document.getElementById("ckforcetranscode").checked = true;
				break;
			case 4:
				document.getElementById("ckremett0").checked = true;
				break;
		}
	}
	if (getE[2] == "1") document.getElementById("idpresentation").style.display = "block";
	else document.getElementById("idpresentation").style.display = "none";
	if (getE[1] == "1") autorisationloupeconfig = false;
	else autorisationloupeconfig = true;
	if (getE[4] == "1") {
		configremiseazer = true;
		document.getElementById('idremisazero').innerHTML = '<i class="fas fa-history"></i>';
	} else {
		configremiseazer = false;
		document.getElementById('idremisazero').innerHTML = '<i class="far fa-clock"></i>';
	}
	getCtempo = getParameterByName('C', url);
	getC = 0;
	if (getCtempo !== null) {
		getCtempo = parseInt(getCtempo);
		if (!isNaN(getCtempo))
			if ((getCtempo >= 0) && (getCtempo <= 8)) getC = getCtempo;
	}
	var dropDown = document.getElementById("axehoriz-select");
	dropDown.value = getC;
	getlangtempo = getParameterByName('lang', url);
	var dropDownlang = document.getElementById("langue-select");
	if (getlangtempo == "en") dropDownlang.value = 1;
	getD = getParameterByName('D', url);
	if ((getD === null) || (!hashvrai)) getD = "1000";
	else getD = dec2bin(getD);
	for (var i = 0; i < getD.length; ++i) {
		if (getD[i] == "1") switch (i) {
			case 0:
				document.getElementById("cktabl").checked = true;
				break;
			case 1:
				document.getElementById("ckgraphique").checked = true;
				break;
			case 2:
				document.getElementById("ckprojet").checked = true;
				break;
			case 3:
				document.getElementById("ckconfig").checked = true;
				break;
		}
	}
	initconfig();
}

function urlconfig() {
	initconfig();
	url = window.location.href;
	url = url.split('?');
	bonparam = "A=" + (parseInt(getA.split("").reverse().join(""), 2)) + "&B=" + (parseInt(getB.split("").reverse().join(""), 2)) + "&C=" + getC + "&D=" + (parseInt(getD.split("").reverse().join(""), 2)) + "&E=" + (parseInt(getE.split("").reverse().join(""), 2));
	newurl = url[0] + "?" + bonparam + "&H=" + stringToHash(bonparam) + "&lang=" + getlang;
	window.open(newurl, '_blank');
}

function urlconfigqrcode() {
	initconfig();
	url = "qrcode.html";
	bonparam = "A=" + (parseInt(getA.split("").reverse().join(""), 2)) + "&B=" + (parseInt(getB.split("").reverse().join(""), 2)) + "&C=" + getC + "&D=" + (parseInt(getD.split("").reverse().join(""), 2)) + "&E=" + (parseInt(getE.split("").reverse().join(""), 2));
	newurl = url + "?" + bonparam + "&H=" + stringToHash(bonparam) + "&lang=" + getlang;
	window.open(newurl, '_blank');
}

function introdemo() {
	intro = introJs();
	intro.setOptions({
		'nextLabel': lesphrasestraduites.suiv,
		'prevLabel': lesphrasestraduites.prece,
		'skipLabel': lesphrasestraduites.quit,
		'doneLabel': lesphrasestraduites.fin
	});
	intro.start(ongletencours);
}

function PourFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		var element = document.body;
		var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
		if (requestMethod) {
			requestMethod.call(element);
		} else if (typeof window.ActiveXObject !== "undefined") {
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}
window.onbeforeunload = function(e) {
	var message = lesphrasestraduites.sauveavant,
		e = e || window.event;
	if (e) {
		e.returnValue = message;
	}
	return message;
};
var ready = function(fn) {
	if (typeof fn !== 'function') return;
	if (document.readyState === 'complete') {
		return fn();
	}
	document.addEventListener('DOMContentLoaded', fn, false);
};
ready(function() {
	initcheck();
	document.getElementById("papaloader").style.display = "none";
	var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;
	if (isSafari) document.getElementById("pourfullscreen").style.display = "none";
});
