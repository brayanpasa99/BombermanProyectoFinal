function Bomba(sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, imagenbomba, bomberman){
	this.sprites = [$(imagenbomba)[0], $(sprite1)[0], $(sprite2)[0], $(sprite3)[0], $(sprite4)[0], $(sprite5)[0], $(sprite6)[0], $(sprite7)[0], $(sprite8)[0], $(sprite9)[0]];
	this.sprite1 = $(sprite1)[0];
	var dibuja = false;
	this.explotar = false;
	this.dueño = $(bomberman)[0];
	this.n = 0;
	
	this.contador = 10;

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
	
	this.setPos = function(posi, posj){
		this.i = posi;
		this.j = posj;
	}

	this.dibujar = function(ctx, posi, posj){
		//this.i = posi;
		//this.j = posj;
		if(dibuja == true){
			ctx.drawImage(this.sprites[this.n], (250 + this.j*64),(72 + this.i*64));
			ctx.drawImage(this.sprites[this.n], (250 + (this.j+1)*64),(72 + this.i*64));
			ctx.drawImage(this.sprites[this.n], (250 + this.j*64),(72 + (this.i+1)*64));
			ctx.drawImage(this.sprites[this.n], (250 + (this.j-1)*64),(72 + this.i*64));
			ctx.drawImage(this.sprites[this.n], (250 + this.j*64),(72 + (this.i-1)*64));
			ctx.save();
			ctx.restore();
		}
		if(this.explotar){
			this.n = this.n + 1;
			this.n = this.n % 10;
		}
			
		
	}


	function estallido(){
		console.log("ENTRE A ESTALLIDO");
		dibujar = false;
		
	}

	this.actualizar = function(){
		dibuja = true;
		estallido();
		this.explotar = true;
		//setTimeout(this.actualizar, 30);
		
		
	}
}
