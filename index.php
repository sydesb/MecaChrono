<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>MecaChrono</title>
    <link rel="stylesheet" href="css/mecachrono.min.css">
    <link rel="stylesheet" href="lib/fontawesome/all.min.css">
    <link href="lib/tabulator/tabulator.min.css" rel="stylesheet">
    <link rel="stylesheet" href="lib/intro/introjs.min.css">
    <link rel="icon" type="image/png" href="img/chronomeca.png">
</head>

<body>
    <?php
$lang = $_GET["lang"];
if ($lang == "en")
    require "lang/en/english.php";
else
    require "lang/fr/francais.php";
?>
   <div class="tabenhaut">
        <button data-intro-group="acqui" data-step="1" data-intro="<?= $MC_TRAD_acquipoints ?>" class="tablinks active" onclick="openOnglet(event,&quot;acqui&quot;)" title="<?= $MC_TRAD_acquipoints ?>"><i class="far fa-dot-circle fa-lg"></i>&nbsp;
            <?= $MC_TRAD_acqui ?>
       </button>
        <button id="ongtab" data-intro-group="onglettableau" data-step="1" data-intro="<?= $MC_TRAD_tableaumesures ?>" class="tablinks" onclick="openOnglet(event,&quot;onglettableau&quot;)" title="<?= $MC_TRAD_tableaumesures ?>"><i class="fas fa-border-all fa-lg"></i>&nbsp;
            <?= $MC_TRAD_tabval ?>
       </button>
        <button id="onggra2" data-intro-group="ongletgraphique2" data-step="1" data-intro="<?= $MC_TRAD_graphavec ?> " class="tablinks" onclick="openOnglet(event,&quot;ongletgraphique2&quot;)" title="<?= $MC_TRAD_graphavec ?>"><i class="fas fa-chart-line fa-lg"></i>&nbsp;
            <?= $MC_TRAD_graph ?>
       </button>
        <button id="ongpro" data-intro-group="ongletprojet" data-step="1" data-intro="" class="tablinks" onclick="openOnglet(event,&quot;ongletprojet&quot;)" title="<?= $MC_TRAD_poursauver ?>"><i class="far fa-folder-open fa-lg"></i>&nbsp;
            <?= $MC_TRAD_projet ?>
       </button>
        <button id="ongconf" data-intro-group="ongletconfig" data-step="1" data-intro="<?= $MC_TRAD_pourconfig ?>" class="tablinks" onclick="openOnglet(event,&quot;ongletconfig&quot;)" title="<?= $MC_TRAD_pourconfig ?>"><i class="fas fa-cogs fa-lg"></i>&nbsp;
            <?= $MC_TRAD_config ?>
       </button>
        <button id="pourfullscreen" data-intro-group="acqui" data-step="2" data-intro="<?= $MC_TRAD_pleinecran ?>" class="tablinks" onclick="PourFullScreen()" title="<?= $MC_TRAD_pleinecran ?>"><i class="fas fa-desktop fa-lg"></i>
        </button>
        <button data-intro-group="acqui" data-step="3" data-intro="<?= $MC_TRAD_aidechange ?>" class="tablinks" onclick="introdemo()" title="<?= $MC_TRAD_aidechange ?>"><i class="far fa-question-circle fa-lg"></i>
        </button>
    </div>
    <div id="acqui" class="classonglet">
        <br>
        <div id="message"></div>
        <nav>
            <ul class="nav">
                <li data-intro-group="acqui" data-step="4" data-intro="<?= $MC_TRAD_effacepoints ?>">
                    <button title="<?= $MC_TRAD_effacepoints ?>" id="effacepoint" onclick="videochargee&&effacepoint()"><i class="fas fa-trash-alt"></i>
                    </button>
                </li>
                <li data-intro-group="acqui" data-step="5" data-intro="<?= $MC_TRAD_chargevideo ?>"><span><button title="<?= $MC_TRAD_chargevideo ?>" id="idupload"><i class="fas fa-file-video"></i></button><input id="idinputupload" type="file" accept="video/*"></span>
                </li>
                <li id="idnewoneaprestranscode" style="display:none">
                    <button title="<?= $MC_TRAD_apresconversion ?>" onclick="window.location.reload(!0)"><i class="fas fa-recycle"></i>
                    </button>
                </li>
                <li data-intro-group="acqui" data-step="6" data-intro="<?= $MC_TRAD_definitorigine ?>" data-intro="">
                    <button title="<?= $MC_TRAD_definitorigine ?>" id="coordorigine" onclick="videochargee&&originecoord()">
                        <svg class="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="m493.58 382.257-118.252-107.499 0 73.75-232.371 0 0-231.249 74.121 0-108.245-117.259-108.253 117.259 74.42 0 0 298.748 300.328 0 0 73.75 118.252-107.5z"></path>
                        </svg>
                    </button>
                </li>
                <li data-intro-group="acqui" data-step="7" data-intro="<?= $MC_TRAD_rotarepere ?>">
                    <button title="<?= $MC_TRAD_rotarepere ?>" id="idrotaxe" onclick="videochargee&&rotationrepere()"><span class="fa-layers fa-fw"><i class="fas fa-arrow-left" data-fa-transform="left-10 shrink-8"></i> <i class="far fa-question-circle" data-fa-transform=""></i> <i class="fas fa-arrow-right" data-fa-transform="right-10 shrink-8"></i></span>
                    </button>
                </li>
                <li data-intro-group="acqui" data-step="8" data-intro="<?= $MC_TRAD_definitechelle ?>">
                    <button title="<?= $MC_TRAD_definitechelle ?>" id="idechelle" onclick="videochargee&&definiechelle()"><i class="fas fa-ruler"></i>
                    </button>
                </li>
                <li data-intro-group="acqui" data-step="9" data-intro="<?= $MC_TRAD_screencap ?>">
                    <button title="<?= $MC_TRAD_screencap ?>" id="idscreencap" onclick="videochargee&&affichemodalscreencap()"><i class="fa fa-camera"></i>
                    </button>
                </li>
            </ul>
        </nav>
        <div data-intro-group="acqui" data-step="10" data-intro="<?= $MC_TRAD_videoaudessus ?>">
            <div id="video-controls" class="controls" data-state="hidden">
                <div class="progress">
                    <div id="progress">
                        <div id="progress-bar"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="videoCont" class="container">
            <video controls style="display:none" id="monfilm"></video>
            <canvas class="canvas" style="display:none" id="cv1"></canvas>
            <div id="divloupecapsule">
                <video controls style="display:none" id="monfilmloupe"></video>
            </div>
        </div>
        <div id="moncontainer">
            <div id="loupemoinsgauche" class="agauchetouteloupemoins"><i class="fas fa-search-minus"></i>
            </div>
            <div id="loupeplusgauche" class="agauchetouteloupeplus"><i class="fas fa-search-plus"></i>
            </div>
            <div title="<?= $MC_TRAD_reglagevideo ?>" data-intro-group="acqui" data-step="17" data-intro="<?= $MC_TRAD_reglagevideo ?>" id="reglagecouleurgauchepico" class="agauchetoutereglagecouleurvideo" onclick="videochargee&&lumicontraste()"><i class="fas fa-sliders-h"></i>
            </div>
            <div id="infotime" class="agauche">0.00 s</div>
            <div id="infofps" class="adroite">1 échantillon toutes les 10 images / 25 ips</div>
            <div class="aucentre">
                <button class="buttonsousvideo ticksousvideo" title="<?= $MC_TRAD_remetsvideo ?>" id="toutdebut" onclick="videochargee&&retourdebut()" data-intro-group="acqui" data-step="11" data-intro="<?= $MC_TRAD_remetsvideo ?>"><i class="fas fa-fast-backward fa-2x"></i>
                </button>
                <button class="buttonsousvideo ticksousvideo" data-intro-group="acqui" data-step="12" data-intro="<?= $MC_TRAD_recherchepoint ?>" title="<?= $MC_TRAD_recherchepoint ?>" id="enregistreprec" onclick="videochargee&&enregistrepre()"><i class="fas fa-backward fa-2x"></i>
                </button>
                <button class="buttonsousvideo ticksousvideo" data-intro-group="acqui" data-step="13" data-intro="<?= $MC_TRAD_seplaceimagepre ?>" title="<?= $MC_TRAD_seplaceimagepre ?>" id="imagprec" onclick="videochargee&&moinsframe()"><i class="fas fa-chevron-left fa-2x"></i>
                </button>
                <button class="buttonsousvideo ticksousvideo" data-intro-group="acqui" data-step="14" data-intro="<?= $MC_TRAD_lecpause ?>" title="<?= $MC_TRAD_lecpause ?>" id="btplay" onclick="videochargee&&playVid()"><i class="fas fa-play fa-2x"></i>
                </button>
                <button class="buttonsousvideo ticksousvideo" data-intro-group="acqui" data-step="15" data-intro="<?= $MC_TRAD_seplaceimagesui ?>" title="<?= $MC_TRAD_seplaceimagesui ?>" id="imagesuiv" onclick="videochargee&&plusframe()"><i class="fas fa-chevron-right fa-2x"></i>
                </button>
                <button class="buttonsousvideo ticksousvideo" data-intro-group="acqui" data-step="16" data-intro="<?= $MC_TRAD_recherchepointsuiv ?>" title="<?= $MC_TRAD_recherchepointsuiv ?>" id="enregistresuiv" onclick="videochargee&&enregistresuiv()"><i class="fas fa-forward fa-2x"></i>
                </button>
            </div>
        </div>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span id="closeechelle" class="close">&times;</span>
                    <h5><?= $MC_TRAD_etalon ?></h5>
                </div>
                <div class="modal-body">
                    <label for="longueur">
                        <?= $MC_TRAD_longueuretalon ?>
                   </label>
                    <input name="long" id="longetalon">
                </div>
                <div class="modal-footer">
                    <button data-target="myModal" class="btn modal-trigger" id="validlong">
                        <?= $MC_TRAD_ok ?>
                   </button>
                </div>
            </div>
        </div>
        <div id="myModalTranscode" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span id="closeTranscode" class="close" style="display:none">&times;</span>
                    <h5><?= $MC_TRAD_convertisseur ?></h5>
                </div>
                <div class="modal-body">
                    <label>
                        <?= $MC_TRAD_mercipatienter ?>
                   </label>
                    <p></p><span id="messageTranscode" style="padding-left:20px"></span>&nbsp; <span id="ratioTranscode"></span>
                    <p></p>
                </div>
                <div class="modal-footer">
                    <input type="checkbox" id="sauvemp4" name="sauvemp4" checked>
                    <label for="sauvemp4" style="color:#000">
                        <?= $MC_TRAD_cochezconv ?>
                   </label>
                </div>
            </div>
        </div>
        <div id="myModalfps" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span id="closefps" class="close">&times;</span>
                    <h5><?= $MC_TRAD_reglagetemps ?></h5>
                </div>
                <div class="modal-body">
                    <div class="groupedeform">
                        <label for="longueur">
                            <?= $MC_TRAD_nbimparsec ?>:</label>
                        <input name="nbfps" id="idfps" value="25">
                    </div>
                    <div class="groupedeform">
                        <label for="longueur">
                            <?= $MC_TRAD_nbentredeux ?>:</label>
                        <input name="nbimagedeux" id="idnbimdeux" value="10">
                    </div>
                </div>
                <div class="modal-footer">
                    <button data-target="myModalfps" class="btn modal-trigger" id="validfps">
                        <?= $MC_TRAD_ok ?>
                   </button>
                </div>
            </div>
        </div>
        <div id="myModalcontraste" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span id="closecontrast" class="close">&times;</span>
                    <h5><?= $MC_TRAD_reglagevideo ?></h5>
                </div>
                <div class="modal-body">
                    <div class="groupedeform">
                        <label class="labelcontrast" for="luminosite">
                            <?= $MC_TRAD_lumino ?>:</label>
                        <input class="slidercontrast" type="range" id="luminosite" name="luminosite" min="0" max="500" value="100">
                    </div>
                    <div class="groupedeform">
                        <label class="labelcontrast" for="Constraste">
                            <?= $MC_TRAD_contra ?>:</label>
                        <input class="slidercontrast" type="range" id="Constraste" name="Constraste" min="0" max="500" value="100">
                    </div>
                    <div class="groupedeform">
                        <label class="labelcontrast" for="Saturation">
                            <?= $MC_TRAD_satur ?>:</label>
                        <input class="slidercontrast" type="range" id="Saturation" name="Saturation" min="0" max="500" value="100">
                    </div>
                    <div class="groupedeform">
                        <label class="labelcontrast" for="Inversion">
                            <?= $MC_TRAD_negat ?>:</label>
                        <input class="slidercontrast" type="range" id="Inversion" name="Inversion" min="0" max="100" value="0">
                    </div>
                    <div class="groupedeform">
                        <label class="labelcontrast" for="Decalage">
                            <?= $MC_TRAD_huecouleur ?>:</label>
                        <input class="slidercontrast" type="range" id="Decalage" name="Decalage" min="0" max="360" value="0">
                    </div>
                    <div class="groupedeform">
                        <label class="labelcontrast">
                            <?= $MC_TRAD_reinitreglagevideo ?>:</label>
                        <div id="resetcontraste"><i class="fas fa-redo-alt fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button data-target="myModalcontraste" class="btn modal-trigger" id="validcontraste">
                        <?= $MC_TRAD_ok ?>
                   </button>
                </div>
            </div>
        </div>
        <div id="myModalwebcam" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span class="close">&times;</span>
                    <h5><?= $MC_TRAD_camera ?></h5>
                </div>
                <div class="modal-body">
                    <label for="longueur">
                        <?= $MC_TRAD_duree ?>:</label>
                    <input name="duree" id="laduree">
                    <br>
                    <video id="preview" width="1600" height="1200" autoplay muted style="width:100%;height:100%"></video>
                </div>
                <div class="modal-footer">
                    <button class="btn modal-trigger" id="recordgo">
                        <?= $MC_TRAD_enregistre ?>
                   </button>
                    <button class="btn modal-trigger" id="recordstop">
                        <?= $MC_TRAD_stopenregi ?>
                   </button>
                </div>
            </div>
        </div>
        <div id="myModalcaptureecran" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span id="closecaptureecran" class="close">&times;</span>
                    <h5><?= $MC_TRAD_captureecran ?></h5>
                </div>
                <div class="modal-body">
                    <p>
                        <?= $MC_TRAD_captureecranchoix ?>
                   </p>
                    <div class="groupedeform">
                        <div>
                            <input type="radio" id="capturetransparent" name="captureecran" value="transparent">
                            <label for="capturetransparent">
                                <?= $MC_TRAD_captureecrantrajtransp ?>
                           </label>
                        </div>
                        <div>
                            <input type="radio" id="captureblanc" name="captureecran" value="blanc">
                            <label for="captureblanc">
                                <?= $MC_TRAD_captureecrantrajblanc ?>
                           </label>
                        </div>
                        <div>
                            <input type="radio" id="capturenoir" name="captureecran" value="noir" checked>
                            <label for="capturenoir">
                                <?= $MC_TRAD_captureecrantrajnoir ?>
                           </label>
                        </div>
                        <div>
                            <input type="radio" id="captureincruste" name="captureecran" value="incruste">
                            <label for="captureincruste">
                                <?= $MC_TRAD_captureecranfond ?>
                           </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button data-target="myModalcaptureecran" class="btn modal-trigger" id="validcaptureecran">
                        <?= $MC_TRAD_ok ?>
                   </button>
                </div>
            </div>
        </div>
    </div>
    <div id="onglettableau" class="classonglet" style="display:none">
        <p>
            <br>
        </p>
        <nav>
            <ul class="nav">
                <li data-intro-group="onglettableau" data-step="2" data-intro="<?= $MC_TRAD_copiecontenupress ?>">
                    <button id="idexportclipboard" onclick="exportclipboardvirgule()" title="<?= $MC_TRAD_copiecontenupress ?>"><i class="fas fa-copy"></i>
                    </button>
                </li>
                <li data-intro-group="onglettableau" data-step="3" data-intro="<?= $MC_TRAD_copiecontmiseenforme ?>">
                    <button id="idexportclipboardmiseenpagepoint" onclick="exportclipboardpoint()" title="<?= $MC_TRAD_copiecontmiseenforme ?>"><i class="fas fa-table"></i>
                    </button>
                </li>
                <li data-intro-group="onglettableau" data-step="4" data-intro="<?= $MC_TRAD_exportcsv ?>">
                    <button id="idexportcsv" onclick="exportcsv()" title="<?= $MC_TRAD_exportcsv ?>"><i class="fas fa-file-csv"></i>
                    </button>
                </li>
                <li data-intro-group="onglettableau" data-step="5" data-intro="<?= $MC_TRAD_exportxlsx ?>">
                    <button id="idexportxls" onclick="exportxls()" title="<?= $MC_TRAD_exportxlsx ?>"><i class="fas fa-file-excel"></i>
                    </button>
                </li>
                <li data-intro-group="onglettableau" data-step="6" data-intro="<?= $MC_TRAD_copiepython ?> ">
                    <button id="idexportpython" onclick="exportpython()" title="<?= $MC_TRAD_copiepython ?>"><i class="fab fa-python"></i>
                    </button>
                </li>
                <li data-intro-group="onglettableau" data-step="2" data-intro="<?= $MC_TRAD_t0 ?>">
                    <button id="idremisazero" onclick="remiset0()" title="<?= $MC_TRAD_t0 ?>"><i class="fas fa-history"></i>
                    </button>
                </li>
            </ul>
        </nav>
        <p>
            <br>
        </p>
        <div id="infopasdechelletab" style="text-align:center">
            <?= $MC_TRAD_manqueechelle ?>&nbsp;&nbsp;<i class="fas fa-ruler"></i>
        </div>
        <div id="infopasdelistetab" style="text-align:center">
            <?= $MC_TRAD_manquepoint ?>
       </div>
        <div id="papadivtabulator" style="display:none">
            <div id="tablepoints"></div>
        </div>
    </div>
    <div id="ongletgraphique2" class="classonglet" style="display:none;height:1500px">
        <p>
            <br>
        </p>
        <nav>
            <ul class="nav">
                <li data-intro-group="ongletgraphique2" data-step="2" data-intro="<?= $MC_TRAD_replaceaxes ?>">
                    <button id="idfullaxes" onclick="creertramefondgraphique()" title="<?= $MC_TRAD_replaceaxes ?>"><i class="fas fa-compress-arrows-alt"></i>
                    </button>
                </li>
                <li data-intro-group="ongletgraphique2" data-step="3" data-intro="<?= $MC_TRAD_exportpng ?>">
                    <button id="idsavepng" onclick="exportpng()" title="<?= $MC_TRAD_exportpng ?>"><i class="fas fa-file-image"></i>
                    </button>
                </li>
            </ul>
        </nav>
        <p>
            <br>
        </p>
        <div id="infopasdechellegraph" style="text-align:center">
            <?= $MC_TRAD_manqueechelle ?>&nbsp;&nbsp;<i class="fas fa-ruler"></i>
        </div>
        <div id="infopasdelistegraph" style="text-align:center">
            <?= $MC_TRAD_manquepoint ?>
       </div>
        <div id="valeurgraph"></div>
        <div class="chart-container" id="idchartcontain">
            <div class="containercanvasgraph" id="idcontcanv0">
                <canvas id="canvast" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquet" class="canvasgraph canvasdynamique" data-numcanvas="0"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv1">
                <canvas id="canvasx" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquex" class="canvasgraph canvasdynamique" data-numcanvas="1"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv2">
                <canvas id="canvasy" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquey" class="canvasgraph canvasdynamique" data-numcanvas="2"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv3">
                <canvas id="canvasvx" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquevx" class="canvasgraph canvasdynamique" data-numcanvas="3"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv4">
                <canvas id="canvasvy" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquevy" class="canvasgraph canvasdynamique" data-numcanvas="4"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv5">
                <canvas id="canvasv" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquev" class="canvasgraph canvasdynamique" data-numcanvas="5"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv6">
                <canvas id="canvasax" class="canvasgraph"></canvas>
                <canvas id="canvdynamiqueax" class="canvasgraph canvasdynamique" data-numcanvas="6"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv7">
                <canvas id="canvasay" class="canvasgraph"></canvas>
                <canvas id="canvdynamiqueay" class="canvasgraph canvasdynamique" data-numcanvas="7"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv8">
                <canvas id="canvasa" class="canvasgraph"></canvas>
                <canvas id="canvdynamiquea" class="canvasgraph canvasdynamique" data-numcanvas="8"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv9">
                <canvas id="canvasEc" class="canvasgraph"></canvas>
                <canvas id="canvdynamiqueEc" class="canvasgraph canvasdynamique" data-numcanvas="9"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv10">
                <canvas id="canvasEp" class="canvasgraph"></canvas>
                <canvas id="canvdynamiqueEp" class="canvasgraph canvasdynamique" data-numcanvas="10"></canvas>
            </div>
            <div class="containercanvasgraph" id="idcontcanv11">
                <canvas id="canvasEm" class="canvasgraph"></canvas>
                <canvas id="canvdynamiqueEm" class="canvasgraph canvasdynamique" data-numcanvas="11"></canvas>
            </div>
        </div>
    </div>
    <div id="ongletprojet" class="classonglet" style="display:none">
        <p>
            <br>
        </p>
        <nav>
            <ul class="nav">
                <li data-intro-group="ongletprojet" data-step="2" data-intro="<?= $MC_TRAD_sauveprojet ?>">
                    <button id="idup" onclick="saveproject()" title="<?= $MC_TRAD_sauveprojet ?>"><i class="fas fa-upload"></i>
                    </button>
                </li>
                <li data-intro-group="ongletprojet" data-step="3" data-intro="<?= $MC_TRAD_chargeprojet ?>"><span><button id="iduploadproject" title="<?= $MC_TRAD_chargeprojet ?>"><i class="fas fa-download"></i></button><input id="idinputproject" type="file"></span>
                </li>
                <li data-intro-group="ongletprojet" data-step="4" data-intro="<?= $MC_TRAD_effaceprojet ?>">
                    <button id="idnewone" title="<?= $MC_TRAD_effaceprojet ?>" onclick="window.location.reload(!0)"><i class="fas fa-recycle"></i>
                    </button>
                </li>
            </ul>
        </nav>
        <div id="Modalnomvideoprojet" class="modal">
            <div class="modal-content">
                <div class="modal-header"><span id="closenomvideoprojet" class="close">&times;</span>
                    <h5><?= $MC_TRAD_vid ?></h5>
                </div>
                <div class="modal-body">
                    <label for="nomvideoprojet" id="labelnombideoprojet">
                        <?= $MC_TRAD_secu ?>:</label>
                    <input id="idinputuploadprojet" type="file">
                </div>
            </div>
        </div>
    </div>
    <div id="ongletconfig" class="classonglet" style="display:none">
        <p>
            <br>
        </p>
        <nav>
            <ul class="nav">
                <li data-intro-group="ongletconfig" data-step="2" data-intro="<?= $MC_TRAD_applique ?>">
                    <button id="idrefresh" onclick="initconfig()" title="<?= $MC_TRAD_applique ?>"><i class="far fa-check-circle"></i>
                    </button>
                </li>
                <li data-intro-group="ongletconfig" data-step="3" data-intro="<?= $MC_TRAD_exportlien ?>">
                    <button id="idurlconf" onclick="urlconfig()" title="<?= $MC_TRAD_exportlien ?>"><i class="far fa-share-square"></i>
                    </button>
                </li>
                <li data-intro-group="ongletconfig" data-step="4" data-intro="<?= $MC_TRAD_qrcode ?>">
                    <button id="idurlqrcode" onclick="urlconfigqrcode()" title="<?= $MC_TRAD_qrcode ?>"><i class="fas fa-qrcode"></i>
                    </button>
                </li>
            </ul>
        </nav>
        <p>
            <br>
        </p>
        <div class="blockcheck">
            <div class="blockheader">
                <h3><?= $MC_TRAD_valexploiter ?></h3>
            </div>
            <div class="blockbody" id="valeursaexploit">
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckt" data-grandeur="t">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_t ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckx" data-grandeur="x">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_x ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="cky" data-grandeur="y">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_y ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckvx" data-grandeur="vx">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_vx ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckvy" data-grandeur="vy">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_vy ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckv" data-grandeur="v">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_v ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckax" data-grandeur="ax">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_ax ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckay" data-grandeur="ay">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_ay ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="cka" data-grandeur="a">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_a ?>
                   </label>
                </div>
            </div>
        </div>
        <p>
            <br>
        </p>
        <div class="blockcheck">
            <div class="blockheader">
                <h3><?= $MC_TRAD_exportabl ?></h3>
            </div>
            <div class="blockbody" id="exportarray">
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckentete">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_premiereligne ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckvirgule">
                    <label for="ckvirgule" class="labelcheck">
                        <?= $MC_TRAD_sepavirgule ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckseparationcsv">
                    <label for="ckseparationcsv" class="labelcheck">
                        <?= $MC_TRAD_sepacsv ?>
                   </label>
                </div>
            </div>
        </div>
        <p>
            <br>
        </p>
        <div class="blockcheck">
            <div class="blockheader">
                <h3><?= $MC_TRAD_graphiqueconfig ?></h3>
            </div>
            <div class="blockbody" id="choixgraphique">
                <label style="margin-left:10%">
                    <?= $MC_TRAD_choixvariabl ?>
               </label>
                <select name="abscisse" id="axehoriz-select">
                    <option value="0">
                        <?= $MC_TRAD_t ?>
                   </option>
                    <option value="1">
                        <?= $MC_TRAD_x ?>
                   </option>
                    <option value="2">
                        <?= $MC_TRAD_y ?>
                   </option>
                    <option value="3">
                        <?= $MC_TRAD_vx ?>
                   </option>
                    <option value="4">
                        <?= $MC_TRAD_vy ?>
                   </option>
                    <option value="5">
                        <?= $MC_TRAD_v ?>
                   </option>
                    <option value="6">
                        <?= $MC_TRAD_ax ?>
                   </option>
                    <option value="7">
                        <?= $MC_TRAD_ay ?>
                   </option>
                    <option value="8">
                        <?= $MC_TRAD_a ?>
                   </option>
                </select>
            </div>
        </div>
        <p>
            <br>
        </p>
        <div class="blockcheck">
            <div class="blockheader">
                <h3><?= $MC_TRAD_divers ?></h3>
            </div>
            <div class="blockbody" id="configdivers">
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckloupedecalee">
                    <label for="ckloupedecalee" class="labelcheck">
                        <?= $MC_TRAD_decalloupe ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckloupeinterdit">
                    <label for="ckloupeinterdit" class="labelcheck">
                        <?= $MC_TRAD_afficheloupe ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckaffichepresentation">
                    <label for="ckafficheprsentation" class="labelcheck">
                        <?= $MC_TRAD_affichepresen ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckforcetranscode">
                    <label for="ckforcetranscode" class="labelcheck">
                        <?= $MC_TRAD_forceconversion ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckremett0">
                    <label for="ckremett0" class="labelcheck">
                        <?= $MC_TRAD_configt0 ?>
                   </label>
                </div>
            </div>
        </div>
        <p>
            <br>
        </p>
        <div class="blockcheck">
            <div class="blockheader">
                <h3><?= $MC_TRAD_ongletsdispo ?></h3>
            </div>
            <div class="blockbody" id="ongletdispo">
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="cktabl" data-grandeur="leltabl">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_ongtabl ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckgraphique" data-grandeur="legraphique">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_onggraph ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckprojet" data-grandeur="leprojet">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_ongprojet ?>
                   </label>
                </div>
                <div class="lecheck">
                    <input type="checkbox" class="uiswitch custom" id="ckconfig" data-grandeur="laconfig">
                    <label for="ckentete" class="labelcheck">
                        <?= $MC_TRAD_ongconfig ?>)</label>
                </div>
            </div>
        </div>
        <p>
            <br>
        </p>
        <div class="blockcheck">
            <div class="blockheader">
                <h3><?= $MC_TRAD_choixlangue ?></h3>
            </div>
            <div class="blockbody" id="blockcheck_langue-select">
                <label style="margin-left:10%">
                    <?= $MC_TRAD_choixlanguevariabl ?>
               </label>
                <select name="abscisse" id="langue-select">
                    <option value="0">
                        <?= $MC_TRAD_choixlangueL1 ?>
                   </option>
                    <option value="1">
                        <?= $MC_TRAD_choixlangueL2 ?>
                   </option>
                </select>
            </div>
        </div>
    </div>
    <div id="idpresentation" class="modal-presentation">
        <div class="modal-content-presentation">
            <div class="modal-body-presentation">
                <div class="popup__photo"></div><span id="closepresentation" class="leclose">&times;</span>
                <div class="popup__text">
                    <h3>MecaChrono β 0.006</h3>
                    <p>
                        <?= $MC_TRAD_merci ?>.
                            <br>
                            <?= $MC_TRAD_ilsagit ?>&nbsp;<span data-tooltip="<?= $MC_TRAD_rgpd ?>" data-tooltip-position="bottom"><?= $MC_TRAD_suiteilsagit ?></span>&nbsp;
                                <?= $MC_TRAD_don ?>
                   </p>
                    <div style="background:#ffc439;color:#111;width:150px;padding:10px 0 0 10px;border-radius:3px;text-align:center;text-decoration:none;margin:auto">
                        <a href="https://paypal.me/elevesonline?locale.x=fr_FR" target="_blank">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCIgeG1sbnM9Imh0dHA6JiN4MkY7JiN4MkY7d3d3LnczLm9yZyYjeDJGOzIwMDAmI3gyRjtzdmciPjxwYXRoIGZpbGw9IiMwMDljZGUiIG9wYWNpdHk9IjEiIGQ9Ik0gMjAuOTI0IDcuMTU3IEMgMjEuMjA0IDUuMDU3IDIwLjkyNCAzLjY1NyAxOS44MDEgMi4zNTcgQyAxOC41ODMgMC45NTcgMTYuNDMgMC4yNTcgMTMuNzE2IDAuMjU3IEwgNS43NTggMC4yNTcgQyA1LjI5IDAuMjU3IDQuNzI5IDAuNzU3IDQuNjM0IDEuMjU3IEwgMS4zNTggMjMuNDU3IEMgMS4zNTggMjMuODU3IDEuNjM5IDI0LjM1NyAyLjEwNyAyNC4zNTcgTCA2Ljk3NSAyNC4zNTcgTCA2LjY5NCAyNi41NTcgQyA2LjYgMjYuOTU3IDYuODgxIDI3LjI1NyA3LjI1NSAyNy4yNTcgTCAxMS4zNzUgMjcuMjU3IEMgMTEuODQ0IDI3LjI1NyAxMi4zMTEgMjYuOTU3IDEyLjQwNSAyNi40NTcgTCAxMi40MDUgMjYuMTU3IEwgMTMuMjQ3IDIwLjk1NyBMIDEzLjI0NyAyMC43NTcgQyAxMy4zNDEgMjAuMjU3IDEzLjgwOSAxOS44NTcgMTQuMjc3IDE5Ljg1NyBMIDE0Ljg0IDE5Ljg1NyBDIDE4Ljg2NCAxOS44NTcgMjEuOTU0IDE4LjE1NyAyMi44OSAxMy4xNTcgQyAyMy4zNTggMTEuMDU3IDIzLjE3MiA5LjM1NyAyMi4wNDggOC4xNTcgQyAyMS43NjcgNy43NTcgMjEuMjk4IDcuNDU3IDIwLjkyNCA3LjE1NyBMIDIwLjkyNCA3LjE1NyI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMTIxNjkiIG9wYWNpdHk9IjEiIGQ9Ik0gMjAuOTI0IDcuMTU3IEMgMjEuMjA0IDUuMDU3IDIwLjkyNCAzLjY1NyAxOS44MDEgMi4zNTcgQyAxOC41ODMgMC45NTcgMTYuNDMgMC4yNTcgMTMuNzE2IDAuMjU3IEwgNS43NTggMC4yNTcgQyA1LjI5IDAuMjU3IDQuNzI5IDAuNzU3IDQuNjM0IDEuMjU3IEwgMS4zNTggMjMuNDU3IEMgMS4zNTggMjMuODU3IDEuNjM5IDI0LjM1NyAyLjEwNyAyNC4zNTcgTCA2Ljk3NSAyNC4zNTcgTCA4LjI4NiAxNi4wNTcgTCA4LjE5MiAxNi4zNTcgQyA4LjI4NiAxNS43NTcgOC43NTQgMTUuMzU3IDkuMzE1IDE1LjM1NyBMIDExLjY1NSAxNS4zNTcgQyAxNi4yNDMgMTUuMzU3IDE5LjgwMSAxMy4zNTcgMjAuOTI0IDcuNzU3IEMgMjAuODMxIDcuNDU3IDIwLjkyNCA3LjM1NyAyMC45MjQgNy4xNTciPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBvcGFjaXR5PSIxIiBkPSJNIDkuNTA0IDcuMTU3IEMgOS41OTYgNi44NTcgOS43ODQgNi41NTcgMTAuMDY1IDYuMzU3IEMgMTAuMjUxIDYuMzU3IDEwLjM0NSA2LjI1NyAxMC41MzIgNi4yNTcgTCAxNi43MTEgNi4yNTcgQyAxNy40NjEgNi4yNTcgMTguMjA4IDYuMzU3IDE4Ljc3MiA2LjQ1NyBDIDE4Ljk1OCA2LjQ1NyAxOS4xNDYgNi40NTcgMTkuMzMzIDYuNTU3IEMgMTkuNTIgNi42NTcgMTkuNzA3IDYuNjU3IDE5LjgwMSA2Ljc1NyBDIDE5Ljg5NCA2Ljc1NyAxOS45ODcgNi43NTcgMjAuMDgyIDYuNzU3IEMgMjAuMzYyIDYuODU3IDIwLjY0MyA3LjA1NyAyMC45MjQgNy4xNTcgQyAyMS4yMDQgNS4wNTcgMjAuOTI0IDMuNjU3IDE5LjgwMSAyLjI1NyBDIDE4LjY3NyAwLjg1NyAxNi41MjUgMC4yNTcgMTMuODA5IDAuMjU3IEwgNS43NTggMC4yNTcgQyA1LjI5IDAuMjU3IDQuNzI5IDAuNjU3IDQuNjM0IDEuMjU3IEwgMS4zNTggMjMuNDU3IEMgMS4zNTggMjMuODU3IDEuNjM5IDI0LjM1NyAyLjEwNyAyNC4zNTcgTCA2Ljk3NSAyNC4zNTcgTCA4LjI4NiAxNi4wNTcgTCA5LjUwNCA3LjE1NyBaIj48L3BhdGg+PC9zdmc+" alt="PP" class="paypal-logo paypal-logo-pp paypal-logo-color-blue">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0IiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMi4yMzcgMi40NDQgTCA0LjQzNyAyLjQ0NCBDIDMuOTM3IDIuNDQ0IDMuNDM3IDIuODQ0IDMuMzM3IDMuMzQ0IEwgMC4yMzcgMjMuMzQ0IEMgMC4xMzcgMjMuNzQ0IDAuNDM3IDI0LjA0NCAwLjgzNyAyNC4wNDQgTCA0LjUzNyAyNC4wNDQgQyA1LjAzNyAyNC4wNDQgNS41MzcgMjMuNjQ0IDUuNjM3IDIzLjE0NCBMIDYuNDM3IDE3Ljc0NCBDIDYuNTM3IDE3LjI0NCA2LjkzNyAxNi44NDQgNy41MzcgMTYuODQ0IEwgMTAuMDM3IDE2Ljg0NCBDIDE1LjEzNyAxNi44NDQgMTguMTM3IDE0LjM0NCAxOC45MzcgOS40NDQgQyAxOS4yMzcgNy4zNDQgMTguOTM3IDUuNjQ0IDE3LjkzNyA0LjQ0NCBDIDE2LjgzNyAzLjE0NCAxNC44MzcgMi40NDQgMTIuMjM3IDIuNDQ0IFogTSAxMy4xMzcgOS43NDQgQyAxMi43MzcgMTIuNTQ0IDEwLjUzNyAxMi41NDQgOC41MzcgMTIuNTQ0IEwgNy4zMzcgMTIuNTQ0IEwgOC4xMzcgNy4zNDQgQyA4LjEzNyA3LjA0NCA4LjQzNyA2Ljg0NCA4LjczNyA2Ljg0NCBMIDkuMjM3IDYuODQ0IEMgMTAuNjM3IDYuODQ0IDExLjkzNyA2Ljg0NCAxMi42MzcgNy42NDQgQyAxMy4xMzcgOC4wNDQgMTMuMzM3IDguNzQ0IDEzLjEzNyA5Ljc0NCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS40MzcgOS42NDQgTCAzMS43MzcgOS42NDQgQyAzMS40MzcgOS42NDQgMzEuMTM3IDkuODQ0IDMxLjEzNyAxMC4xNDQgTCAzMC45MzcgMTEuMTQ0IEwgMzAuNjM3IDEwLjc0NCBDIDI5LjgzNyA5LjU0NCAyOC4wMzcgOS4xNDQgMjYuMjM3IDkuMTQ0IEMgMjIuMTM3IDkuMTQ0IDE4LjYzNyAxMi4yNDQgMTcuOTM3IDE2LjY0NCBDIDE3LjUzNyAxOC44NDQgMTguMDM3IDIwLjk0NCAxOS4zMzcgMjIuMzQ0IEMgMjAuNDM3IDIzLjY0NCAyMi4xMzcgMjQuMjQ0IDI0LjAzNyAyNC4yNDQgQyAyNy4zMzcgMjQuMjQ0IDI5LjIzNyAyMi4xNDQgMjkuMjM3IDIyLjE0NCBMIDI5LjAzNyAyMy4xNDQgQyAyOC45MzcgMjMuNTQ0IDI5LjIzNyAyMy45NDQgMjkuNjM3IDIzLjk0NCBMIDMzLjAzNyAyMy45NDQgQyAzMy41MzcgMjMuOTQ0IDM0LjAzNyAyMy41NDQgMzQuMTM3IDIzLjA0NCBMIDM2LjEzNyAxMC4yNDQgQyAzNi4yMzcgMTAuMDQ0IDM1LjgzNyA5LjY0NCAzNS40MzcgOS42NDQgWiBNIDMwLjMzNyAxNi44NDQgQyAyOS45MzcgMTguOTQ0IDI4LjMzNyAyMC40NDQgMjYuMTM3IDIwLjQ0NCBDIDI1LjAzNyAyMC40NDQgMjQuMjM3IDIwLjE0NCAyMy42MzcgMTkuNDQ0IEMgMjMuMDM3IDE4Ljc0NCAyMi44MzcgMTcuODQ0IDIzLjAzNyAxNi44NDQgQyAyMy4zMzcgMTQuNzQ0IDI1LjEzNyAxMy4yNDQgMjcuMjM3IDEzLjI0NCBDIDI4LjMzNyAxMy4yNDQgMjkuMTM3IDEzLjY0NCAyOS43MzcgMTQuMjQ0IEMgMzAuMjM3IDE0Ljk0NCAzMC40MzcgMTUuODQ0IDMwLjMzNyAxNi44NDQgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDkuNjQ0IEwgNTEuNjM3IDkuNjQ0IEMgNTEuMjM3IDkuNjQ0IDUwLjkzNyA5Ljg0NCA1MC43MzcgMTAuMTQ0IEwgNDUuNTM3IDE3Ljc0NCBMIDQzLjMzNyAxMC40NDQgQyA0My4yMzcgOS45NDQgNDIuNzM3IDkuNjQ0IDQyLjMzNyA5LjY0NCBMIDM4LjYzNyA5LjY0NCBDIDM4LjIzNyA5LjY0NCAzNy44MzcgMTAuMDQ0IDM4LjAzNyAxMC41NDQgTCA0Mi4xMzcgMjIuNjQ0IEwgMzguMjM3IDI4LjA0NCBDIDM3LjkzNyAyOC40NDQgMzguMjM3IDI5LjA0NCAzOC43MzcgMjkuMDQ0IEwgNDIuNDM3IDI5LjA0NCBDIDQyLjgzNyAyOS4wNDQgNDMuMTM3IDI4Ljg0NCA0My4zMzcgMjguNTQ0IEwgNTUuODM3IDEwLjU0NCBDIDU2LjEzNyAxMC4yNDQgNTUuODM3IDkuNjQ0IDU1LjMzNyA5LjY0NCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi40NDQgTCA1OS45MzcgMi40NDQgQyA1OS40MzcgMi40NDQgNTguOTM3IDIuODQ0IDU4LjgzNyAzLjM0NCBMIDU1LjczNyAyMy4yNDQgQyA1NS42MzcgMjMuNjQ0IDU1LjkzNyAyMy45NDQgNTYuMzM3IDIzLjk0NCBMIDYwLjMzNyAyMy45NDQgQyA2MC43MzcgMjMuOTQ0IDYxLjAzNyAyMy42NDQgNjEuMDM3IDIzLjM0NCBMIDYxLjkzNyAxNy42NDQgQyA2Mi4wMzcgMTcuMTQ0IDYyLjQzNyAxNi43NDQgNjMuMDM3IDE2Ljc0NCBMIDY1LjUzNyAxNi43NDQgQyA3MC42MzcgMTYuNzQ0IDczLjYzNyAxNC4yNDQgNzQuNDM3IDkuMzQ0IEMgNzQuNzM3IDcuMjQ0IDc0LjQzNyA1LjU0NCA3My40MzcgNC4zNDQgQyA3Mi4yMzcgMy4xNDQgNzAuMzM3IDIuNDQ0IDY3LjczNyAyLjQ0NCBaIE0gNjguNjM3IDkuNzQ0IEMgNjguMjM3IDEyLjU0NCA2Ni4wMzcgMTIuNTQ0IDY0LjAzNyAxMi41NDQgTCA2Mi44MzcgMTIuNTQ0IEwgNjMuNjM3IDcuMzQ0IEMgNjMuNjM3IDcuMDQ0IDYzLjkzNyA2Ljg0NCA2NC4yMzcgNi44NDQgTCA2NC43MzcgNi44NDQgQyA2Ni4xMzcgNi44NDQgNjcuNDM3IDYuODQ0IDY4LjEzNyA3LjY0NCBDIDY4LjYzNyA4LjA0NCA2OC43MzcgOC43NDQgNjguNjM3IDkuNzQ0IFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDkwLjkzNyA5LjY0NCBMIDg3LjIzNyA5LjY0NCBDIDg2LjkzNyA5LjY0NCA4Ni42MzcgOS44NDQgODYuNjM3IDEwLjE0NCBMIDg2LjQzNyAxMS4xNDQgTCA4Ni4xMzcgMTAuNzQ0IEMgODUuMzM3IDkuNTQ0IDgzLjUzNyA5LjE0NCA4MS43MzcgOS4xNDQgQyA3Ny42MzcgOS4xNDQgNzQuMTM3IDEyLjI0NCA3My40MzcgMTYuNjQ0IEMgNzMuMDM3IDE4Ljg0NCA3My41MzcgMjAuOTQ0IDc0LjgzNyAyMi4zNDQgQyA3NS45MzcgMjMuNjQ0IDc3LjYzNyAyNC4yNDQgNzkuNTM3IDI0LjI0NCBDIDgyLjgzNyAyNC4yNDQgODQuNzM3IDIyLjE0NCA4NC43MzcgMjIuMTQ0IEwgODQuNTM3IDIzLjE0NCBDIDg0LjQzNyAyMy41NDQgODQuNzM3IDIzLjk0NCA4NS4xMzcgMjMuOTQ0IEwgODguNTM3IDIzLjk0NCBDIDg5LjAzNyAyMy45NDQgODkuNTM3IDIzLjU0NCA4OS42MzcgMjMuMDQ0IEwgOTEuNjM3IDEwLjI0NCBDIDkxLjYzNyAxMC4wNDQgOTEuMzM3IDkuNjQ0IDkwLjkzNyA5LjY0NCBaIE0gODUuNzM3IDE2Ljg0NCBDIDg1LjMzNyAxOC45NDQgODMuNzM3IDIwLjQ0NCA4MS41MzcgMjAuNDQ0IEMgODAuNDM3IDIwLjQ0NCA3OS42MzcgMjAuMTQ0IDc5LjAzNyAxOS40NDQgQyA3OC40MzcgMTguNzQ0IDc4LjIzNyAxNy44NDQgNzguNDM3IDE2Ljg0NCBDIDc4LjczNyAxNC43NDQgODAuNTM3IDEzLjI0NCA4Mi42MzcgMTMuMjQ0IEMgODMuNzM3IDEzLjI0NCA4NC41MzcgMTMuNjQ0IDg1LjEzNyAxNC4yNDQgQyA4NS43MzcgMTQuOTQ0IDg1LjkzNyAxNS44NDQgODUuNzM3IDE2Ljg0NCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4zMzcgMi45NDQgTCA5Mi4xMzcgMjMuMjQ0IEMgOTIuMDM3IDIzLjY0NCA5Mi4zMzcgMjMuOTQ0IDkyLjczNyAyMy45NDQgTCA5NS45MzcgMjMuOTQ0IEMgOTYuNDM3IDIzLjk0NCA5Ni45MzcgMjMuNTQ0IDk3LjAzNyAyMy4wNDQgTCAxMDAuMjM3IDMuMTQ0IEMgMTAwLjMzNyAyLjc0NCAxMDAuMDM3IDIuNDQ0IDk5LjYzNyAyLjQ0NCBMIDk2LjAzNyAyLjQ0NCBDIDk1LjYzNyAyLjQ0NCA5NS40MzcgMi42NDQgOTUuMzM3IDIuOTQ0IFoiPjwvcGF0aD48L3N2Zz4=" alt="PayPal" class="paypal-logo paypal-logo-paypal paypal-logo-color-blue">
                        </a>
                    </div>
                    <p style="text-align:center"><b><?= $MC_TRAD_mercidonneurs ?>: Labolycée, Mme.&nbsp;Carrasco, M.&nbsp;Malie, Mme.&nbsp;Mimoun, Mme.&nbsp;Naït-Bouda, M.&nbsp;Perrault, Mme.&nbsp;Ponsonnet, Mme.&nbsp;Roques&nbsp;(un double merci !), Mme.&nbsp;Ruelle, Mme.&nbsp;Parmentier, M.&nbsp;Troullier<br><br></b>
                    </p>
                    <p>
                        <?= $MC_TRAD_traduction ?>
                   </p>
                    <p style="text-align:right"><a href="https://twitter.com/aevaluation"><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.boreale.org">Sylvain</a>&nbsp;&nbsp;&nbsp;</p>
                </div>
            </div>
        </div>
    </div>
    <div id="copyri2" onclick="ShowPresentation()">&nbsp;&nbsp;©&nbsp; MecaChrono β 0.006 Info</div>
    <div id="papaloader">
        <div class="color1loader boxloader">
            <div id="centreloader"><span class="loader loader-quart-3"></span> &nbsp;&nbsp;
                <?= $MC_TRAD_chargementcours ?>
           </div>
        </div>
    </div>
    <?php
switch ($lang) {
    case "en":
        echo '<script type="text/javascript" src="lang/en/english.js"></script>';
        break;
    default:
        echo '<script type="text/javascript" src="lang/fr/francais.js"></script>';
}
?>
   <script src="lib/ffmpeg/ffmpeg.min.js"></script>
    <script type="text/javascript" src="lib/tabulator/tabulator.min.js"></script>
    <script type="text/javascript" src="lib/fontawesome/all.min.js"></script>
    <script type="text/javascript" src="lib/xlsx/xlsx.full.min.js"></script>
    <script type="text/javascript" src="lib/intro/intro.min.js"></script>
    <script type="text/javascript" src="js/mecachrono.min.js?006"></script>
</body>

</html>
