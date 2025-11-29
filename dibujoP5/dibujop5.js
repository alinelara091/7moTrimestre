 function setup() {
            // Crear un lienzo de 800x600 píxeles
            let canvas = createCanvas(800, 600);
            // Colocar el lienzo dentro del contenedor
            canvas.parent('canvas-container');
            
           
            // Sin bucle de dibujo continuo
            noLoop();
        }

        function draw() {
            // Fondo con gradiente
            drawGradientBackground();
            
            // Dibujar el pollo con las diferentes formas
            drawChicken();
        }

        function drawGradientBackground() {
            // Crear un gradiente de color para el fondo
            for (let y = 0; y < height; y++) {
                // Interpolar entre dos colores
                let inter = map(y, 0, height, 0, 1);
                let c = lerpColor(color(250, 50, 20), color(240, 80, 40), inter);
                stroke(c);
                line(0, y, width, y);
            }
        }

        function drawChicken() {
            // Cuerpo del pollo (elipse grande)
            noStroke();
            fill(200, 25, 77); // Amarillo claro
            ellipse(400, 350, 300, 250);
            
            // Cabeza del pollo (elipse más pequeña)
            fill(27, 220, 85); // Amarillo más intenso
            ellipse(400, 200, 150, 150);
            
            // Ojo (punto grande)
            stroke(0, 0, 10); // Negro
            strokeWeight(15);
            point(350, 190);
            
             // Ojo }2
            stroke(0, 0, 10); // Negro
            strokeWeight(15);
            point(450, 190);
            
            // Pico (triángulo)
            stroke(20, 100, 100); // Naranja
            
            triangle(200, 220, 430, 240, 370, 240);
            
            // Cresta (triángulos)
            stroke(0, 100, 100); // Rojo
            strokeWeight(2);
            fill(0, 100, 100, 90); // Rojo
            triangle(400, 130, 430, 100, 460, 130);
            triangle(400, 130, 370, 100, 340, 130);
            triangle(400, 150, 410, 90, 420, 130);
            triangle(400, 150, 390, 90, 380, 130);
            
            // Alas (elipses)
            noStroke();
            fill(27, 220, 85); // Amarillo muy claro
            ellipse(300, 350, 170, 80);
            ellipse(500, 350, 170, 80);
            
            // Patas (rectángulos)
            stroke(30, 100, 100); // Naranja
            strokeWeight(3);
            fill(30, 100, 100, 90); // Naranja
            rect(350, 470, 20, 60, 10);
            rect(430, 470, 20, 60, 10);
            
            // Dedos de las patas (líneas)
            stroke(30, 100, 100); // Naranja
            strokeWeight(4);
            // Pata izquierda
            line(350, 530, 320, 550);
            line(350, 530, 340, 550);
            line(370, 530, 380, 550);
            // Pata derecha
            line(430, 530, 400, 550);
            line(430, 530, 420, 550);
            line(450, 530, 460, 550);
            
           
       
            
            // Suelo (rectángulo)
            noStroke();
            fill(120, 50, 40, 70); // Verde oscuro semi-transparente
            rect(0, 530, width, 70);
            
       }