var _0x565c=["\x70","\x45\x72\x72\x6F\x72","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x4C\x6F\x20\x73\x65\x6E\x74\x69\x6D\x6F\x73\x2C\x20\x65\x73\x74\x61\x20\x70\x61\x67\x69\x6E\x61\x20\x6E\x6F\x20\x65\x73\x74\x61\x20\x61\x70\x74\x61\x20\x70\x61\x72\x61\x20\x63\x65\x6C\x75\x6C\x61\x72\x65\x73\x20\x6F\x20\x74\x61\x62\x6C\x65\x74\x73\x20\x3A\x28","\x64","\x50\x72\x6F\x70\x69\x65\x64\x61\x64\x65\x73","","\x2B\x51","\x2D\x51","\x30","\x78\x31\x30\x5E","\x4D\x61\x67\x6E\x69\x74\x75\x64","\x50\x72\x6F\x63\x65\x64\x69\x6D\x69\x65\x6E\x74\x6F\x73","\x62\x75\x74\x74\x6F\x6E","\x4C\x69\x6E\x65\x61\x73\x20\x64\x65\x20\x43\x61\x6D\x70\x6F\x20\x45\x6C\x65\x63\x74\x72\x69\x63\x6F","\x77\x69\x64\x74\x68","\x6D\x6F\x75\x73\x65\x43\x6C\x69\x63\x6B\x65\x64","\x50\x72\x6F\x63\x65\x73\x6F\x73\x20\x79\x20\x52\x65\x73\x75\x6C\x74\x61\x64\x6F\x73","\x4D\x61\x6E\x75\x61\x6C\x20\x2D\x20\x49\x6E\x73\x74\x72\x75\x63\x74\x69\x76\x6F","\x72\x65\x73\x75\x6C\x74\x61\x64\x6F\x73\x54\x6F\x74\x61\x6C\x65\x73\x2E\x74\x78\x74","\x50\x41\x52\x54\x49\x43\x55\x4C\x41\x53\x3A","\x70\x72\x69\x6E\x74","\x0D","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x66\x6F","\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23\x0D","\x53\x45\x4E\x53\x4F\x52\x45\x53\x20\x59\x20\x44\x49\x53\x54\x41\x4E\x43\x49\x41\x53\x3A","\x46\x55\x45\x52\x5A\x41\x53\x2C\x20\x43\x41\x4D\x50\x4F\x53\x20\x59\x20\x56\x4F\x4C\x54\x41\x4A\x45\x53\x3A","\x53","\x20\x46\x55\x45\x52\x5A\x41\x53\x3A\x20","\x73\x74\x72\x69\x6E\x67\x46","\x20\x43\x41\x4D\x50\x4F\x53\x20\x45\x3A\x20","\x73\x74\x72\x69\x6E\x67\x43","\x20\x56\x4F\x4C\x54\x41\x4A\x45\x53\x3A\x20","\x73\x74\x72\x69\x6E\x67\x56","\x0A","\x43\x41\x4D\x50\x4F\x53\x20\x45\x2C\x20\x46\x55\x45\x52\x5A\x41\x53\x20\x45\x2C\x20\x56\x4F\x4C\x54\x41\x4A\x45\x53\x20\x54\x4F\x54\x41\x4C\x45\x53\x3A","\x63\x61\x6C\x63\x75\x6C\x6F\x73\x54\x6F\x74\x61\x6C","\x63\x6C\x6F\x73\x65","\x63\x6C\x65\x61\x72","\x69\x6E\x64\x65\x78\x33\x2E\x68\x74\x6D\x6C","\x6F\x70\x65\x6E","\x73\x68\x6F\x77","\x76\x61\x6C\x75\x65","\x68\x74\x6D\x6C","\x58\x3A\x20","\x59\x3A\x20","\x20","\x70\x75\x73\x68","\x73\x65\x74\x41\x72\x72\x61\x79\x73","\x67\x65\x74\x58\x56","\x67\x65\x74\x59\x56","\x67\x65\x74\x4D","\x63\x61\x6C\x63\x75\x6C\x6F\x73","\x72","\x6C"];let separado=20;let campo=[],particulas=[],sensores=[];let plano;let rSlider,mSlider,eSlider,buttonLineasDeCampo,inputM;let indiceP=0;var coordenadasY,coordenadasX,magnitudTexto;var contadorDeSensores=0,contadorDeParticulas=0;var inp;function sorry(){createCanvas(displayWidth,displayHeight);background(255);titulo= createElement(_0x565c[0],_0x565c[1]);titulo[_0x565c[2]](displayWidth* 0.25,displayHeight* 0.25- 30);sorryText= createElement(_0x565c[0],_0x565c[3]);sorryText[_0x565c[2]](displayWidth/ 4,displayHeight/ 4)}function setup(){if(displayWidth< 1280){sorry()}else {createCanvas(displayWidth* 0.75,displayHeight);plano=  new Plano(height,width);titulo= createElement(_0x565c[4],_0x565c[5]);titulo[_0x565c[2]](width+ 10,separado* 2);coordenadasX= createElement(_0x565c[0],_0x565c[6]);coordenadasX[_0x565c[2]](width+ 10,separado* 4);coordenadasY= createElement(_0x565c[0],_0x565c[6]);coordenadasY[_0x565c[2]](width+ 10,separado* 5);texto1= createElement(_0x565c[0],_0x565c[7]);texto1[_0x565c[2]](width+ 10,separado* 7);texto2= createElement(_0x565c[0],_0x565c[8]);texto2[_0x565c[2]](width+ 200,separado* 7);inp= createInput(_0x565c[9]);inp[_0x565c[2]](width+ 50,separado* 11);eTexto= createElement(_0x565c[0],_0x565c[10]);eTexto[_0x565c[2]](width+ 200,separado* 11);rSlider= createSlider(0,10,0,10);rSlider[_0x565c[2]](width+ 50,separado* 9);mTexto= createElement(_0x565c[0],_0x565c[11]);mTexto[_0x565c[2]](width+ 200,separado* 9.3);eSlider= createSlider(-9,3,3,3);eSlider[_0x565c[2]](width+ 50,separado* 13);titulo2= createElement(_0x565c[4],_0x565c[12]);titulo2[_0x565c[2]](width+ 10,separado* 16);buttonLineasDeCampo= createElement(_0x565c[13],_0x565c[14]);buttonLineasDeCampo[_0x565c[2]](width+ displayWidth* 0.25/ 2- buttonLineasDeCampo[_0x565c[15]]/ 2,separado* 20);buttonLineasDeCampo[_0x565c[16]](dibujarLineas);buttonProcesos= createElement(_0x565c[13],_0x565c[17]);buttonProcesos[_0x565c[2]](width+ displayWidth* 0.25/ 2- buttonProcesos[_0x565c[15]]/ 2,separado* 23);buttonProcesos[_0x565c[16]](procesos);buttonInstructivo= createElement(_0x565c[13],_0x565c[18]);buttonInstructivo[_0x565c[2]](width+ displayWidth* 0.25/ 2- buttonInstructivo[_0x565c[15]]/ 2,separado* 26);buttonInstructivo[_0x565c[16]](instructivo)}}function resultados(){var _0x4a66x15=createWriter(_0x565c[19]);_0x4a66x15[_0x565c[21]](_0x565c[20]);_0x4a66x15[_0x565c[21]](_0x565c[22]);for(x= 0;x< particulas[_0x565c[23]];x++){_0x4a66x15[_0x565c[21]](particulas[x][_0x565c[24]]()+ _0x565c[22])};_0x4a66x15[_0x565c[21]](_0x565c[22]);_0x4a66x15[_0x565c[21]](_0x565c[25]);_0x4a66x15[_0x565c[21]](_0x565c[26]);_0x4a66x15[_0x565c[21]](_0x565c[22]);for(x= 0;x< sensores[_0x565c[23]];x++){_0x4a66x15[_0x565c[21]](sensores[x][_0x565c[24]]());_0x4a66x15[_0x565c[21]](_0x565c[22])};_0x4a66x15[_0x565c[21]](_0x565c[25]);_0x4a66x15[_0x565c[21]](_0x565c[27]);_0x4a66x15[_0x565c[21]](_0x565c[22]);for(x= 0;x< sensores[_0x565c[23]];x++){_0x4a66x15[_0x565c[21]](_0x565c[28]+ (x+ 1)+ _0x565c[29]+ sensores[x][_0x565c[30]]()+ _0x565c[22]);_0x4a66x15[_0x565c[21]](_0x565c[28]+ (x+ 1)+ _0x565c[31]+ sensores[x][_0x565c[32]]()+ _0x565c[22]);_0x4a66x15[_0x565c[21]](_0x565c[28]+ (x+ 1)+ _0x565c[33]+ sensores[x][_0x565c[34]]()+ _0x565c[22]);_0x4a66x15[_0x565c[21]](_0x565c[35])};_0x4a66x15[_0x565c[21]](_0x565c[25]);_0x4a66x15[_0x565c[21]](_0x565c[36]);_0x4a66x15[_0x565c[21]](_0x565c[22]);for(x= 0;x< sensores[_0x565c[23]];x++){_0x4a66x15[_0x565c[21]](sensores[x][_0x565c[37]]()+ _0x565c[22])};_0x4a66x15[_0x565c[38]]();_0x4a66x15[_0x565c[39]]()}function instructivo(){window[_0x565c[41]](_0x565c[40])}function dibujarLineas(){for(i= 0;i< campo[_0x565c[23]];i++){campo[i][_0x565c[42]]()}}function mouseMoved(){eTexto[_0x565c[44]](_0x565c[10]+ eSlider[_0x565c[43]]());if(mouseX< displayWidth* 0.75){var _0x4a66x19=floor(mouseX- width/ 2)/ separado;var _0x4a66x1a=floor(height/ 2- mouseY)/ separado;coordenadasX[_0x565c[44]](_0x565c[45]+ _0x4a66x19);coordenadasY[_0x565c[44]](_0x565c[46]+ _0x4a66x1a)}else {coordenadasX[_0x565c[44]](_0x565c[47]);coordenadasY[_0x565c[44]](_0x565c[47])}}function draw(){plano[_0x565c[42]]();stroke(0,0,0);bezier(100,100,200,50,300,100);noLoop()}function mousePressed(){var _0x4a66x1d;var _0x4a66x19=floor(mouseX- width/ 2)/ separado;var _0x4a66x1a=floor(height/ 2- mouseY)/ separado;var _0x4a66x1e=1;if(rSlider[_0x565c[43]]()< 5){_0x4a66x1d= color(255,50,50);_0x4a66x1e= 1}else {_0x4a66x1d= color(80,150,255);_0x4a66x1e=  -1};var _0x4a66x1f=(5/ 6)* eSlider[_0x565c[43]]()+ 17.5;if(mouseButton=== LEFT&& mouseX< width){contadorDeParticulas++;let _0x4a66x20=inp[_0x565c[43]]()* pow(10,eSlider[_0x565c[43]]());let _0x4a66x21= new Particula(mouseX,mouseY,_0x4a66x1d,_0x4a66x19,_0x4a66x1a,_0x4a66x20* (_0x4a66x1e),contadorDeParticulas,_0x4a66x1f);let _0x4a66x22= new CampoElectrico(mouseX,mouseY,_0x4a66x1d);particulas[_0x565c[48]](_0x4a66x21);campo[_0x565c[48]](_0x4a66x22);inp[_0x565c[43]](0)}else {if(mouseButton=== RIGHT&& mouseX< width){contadorDeSensores++;let _0x4a66x23= new Sensor(mouseX,mouseY,color(255,204,0),_0x4a66x19,_0x4a66x1a,contadorDeSensores);sensores[_0x565c[48]](_0x4a66x23)}};dibujarParticulas()}function dibujarParticulas(){for(i= 0;i< particulas[_0x565c[23]];i++){particulas[i][_0x565c[42]]()};for(i= 0;i< sensores[_0x565c[23]];i++){sensores[i][_0x565c[42]]()}}function procesos(){for(i= 0;i< sensores[_0x565c[23]];i++){sensores[i][_0x565c[49]]();for(h= 0;h< particulas[_0x565c[23]];h++){sensores[i][_0x565c[53]](particulas[h][_0x565c[50]](),particulas[h][_0x565c[51]](),particulas[h][_0x565c[52]](),h)}};resultados()}function keyPressed(){if(key=== _0x565c[54]){campo= [];particulas= [];sensores= [];draw();for(i= 0;i< sensores[_0x565c[23]];i++){sensores[i][_0x565c[49]]()};contadorDeParticulas= 0;contadorDeSensores= 0}else {if(key=== _0x565c[55]){draw();dibujarParticulas()}}}