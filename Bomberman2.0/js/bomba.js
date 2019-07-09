function Bomba(sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, imagenbomba, bomberman){
	this.sprites = [$(imagenbomba)[0], $(sprite1)[0], $(sprite2)[0], $(sprite3)[0], $(sprite4)[0], $(sprite5)[0], $(sprite6)[0], $(sprite7)[0], $(sprite8)[0], $(sprite9)[0]];
	this.sprite1 = $(sprite1)[0];
	var dibuja = false;
	var explotar = true;
	this.dueño = $(bomberman)[0];
	var n = 0;
	this.i = 0;
	this.j = 0;

	this.matriz = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];

	this.dibujar = function(ctx, posi, posj){
		this.i = posi;
		this.j = posj;
		console.log(dibuja + "ESTOY EN DIBUJA");
		if(this.dibuja == true){
			ctx.drawImage(this.sprites[n], (250 + posi*64),(72 + posj*64));
			ctx.drawImage(this.sprites[n], (250 + (posi+1)*64),(72 + posj*64));
			ctx.drawImage(this.sprites[n], (250 + posi*64),(72 + (posj+1)*64));
			ctx.drawImage(this.sprites[n], (250 + (posi-1)*64),(72 + posj*64));
			ctx.drawImage(this.sprites[n], (250 + posi*64),(72 + (posj-1)*64));
			ctx.save();
			ctx.restore();
		}
	}


	function estallido(){
		dibuja = true;
		console.log("HOLI3");
		n = n + 1;
		console.log(n);
	}

	this.actualizar = function(){
		dibuja = true;
		while(explotar){
			if(n<10){
				estallido();
			} else {
				explotar = false;
				dibuja = false;
			}
		}
	}
}
