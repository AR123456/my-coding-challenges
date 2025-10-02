Create a flashcard that flips front to back rotating like a globe on click

flip-card-container: This parent element establishes the 3D perspective using perspective: 1000px;.
flip-card: This is the element that will actually rotate. transform-style: preserve-3d; is crucial for allowing the front and back faces to be positioned and transformed within a 3D space. transition: transform 0.8s; creates a smooth animation during the flip.
flip-card-front and flip-card-back: These represent the two sides of the card.
position: absolute; and width: 100%; height: 100%; ensure they stack on top of each other.
backface-visibility: hidden; prevents the backface from being visible when it's rotated away from the viewer.
The flip-card-back is initially rotated rotateY(180deg) to be hidden behind the front face.
.flip-card-container:hover .flip-card: When the user hovers over the container, the flip-card element rotates rotateY(180deg), bringing the backface into view and rotating the front face away.
