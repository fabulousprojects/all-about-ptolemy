function geocentric() {
    document.getElementById("geocentric").style.color = "blue";
    document.getElementById("astronomy-contributions").style.color = "black";
    document.getElementById("other-contributions").style.color = "black";
    document.getElementById("major-works").style.color = "black";
    document.getElementById("Quiz").style.color = "black";
    
    document.getElementById("content").innerHTML = `The notion that the Earth 
    was the center of the Universe is certainly an understandable one. To ancient people,
     looking up at the skies, it seemed evident that the Sun, the Moon and the stars rotated around 
     the Earth once a day. For the Earth-bound observer, the ground that they stood on seemed like a fixed 
     point of reference, a flat plane from which to watch the circling cosmos. 
     It seemed to the Ancient Greeks that all the objects in the sky were set in crystal spheres, which 
     moved around the Earth. However, one Greek philosopher, called Aristarchos (c 320-250 BCE), Suggested 
     that the movements of the planets could be explained by considering them to move around the Sun. The other 
     Greek philosophers were not enthusiastic 
     about this idea and preferred their model featuring crystal spheres.
     <br>
     <br>
     <br>
     The arrangement of the planets in the crystal spheres did not fully fit with the observations 
     made of their movements in the sky. For example, Mercury and Venus did not move so far from the Sun 
     as the crystal sphere arrangement suggested they should, and the apparent backward motion of Mars, 
     Jupiter and Saturn that occasionally occurred could not be explained by this model. The 
     Egyptian astronomer Ptolemy, who lived in the 2nd century, proposed an explanation. 
     If the planets moved around the Earth in a looped circular path, the observed planetary motion would result. 
     This explanation satisfied most people for about 1300 years.`
     
    document.getElementById("pic").src = "Planetary Motion For Geocentric Model.png";
    document.getElementById("pic").alt = "Image of the geocentric orbits"

}

function astronomyContributions() {
    document.getElementById("geocentric").style.color = "black";
    document.getElementById("astronomy-contributions").style.color = "blue";
    document.getElementById("other-contributions").style.color = "black";
    document.getElementById("major-works").style.color = "black";
    document.getElementById("Quiz").style.color = "black";
    document.getElementById("pic").src = "Contribution to astronomy.png";
    document.getElementById("pic").alt = "Picture of the contribution to astronomy"
    
    document.getElementById("content").innerHTML = `Astronomy was the subject to which Ptolemy devoted the most time and effort; 
    about half of all the works that survived deal with astronomical matters, 
    and even others such as the Geography and the Tetrabiblos have significant references to astronomy.
    As we said before one of the major contributions to Astonomy was that he refined the geocentric model.
    <br>
    <br>
    <br>
    Ptolemy claims that the planets coexist in circular orbits,"epicycles", which prowl central points and, in turn, 
    remain eccentric around the Earth. Under this assumption all celestial bodies describe perfectly circular orbits.
    

He dared to project measures of the Sun, the Moon and a set of celestial bodies that made a total of 1,028 stars.
<br>
<br>
His main work in the field of astronomy is called "Almagesto",
 book that was inspired by the study of Hipparchus of Nicaea. 
 In the work reference is made to the fact that the Earth constitutes the center of the 
 universe and for that reason it remains motionless. 
Around it revolve the Sun, the Moon and the stars.`
}


function otherContributions() {
    document.getElementById("geocentric").style.color = "black";
    document.getElementById("astronomy-contributions").style.color = "black";
    document.getElementById("other-contributions").style.color = "blue";
    document.getElementById("major-works").style.color = "black";
    document.getElementById("Quiz").style.color = "black";
    document.getElementById("pic").src = "Other Contribution.png";
    document.getElementById("pic").alt = "An Diagram Of the Pythagorean tuning"

    document.getElementById("content").innerHTML = `He also made a lot of contributions to cartography
    (The art of creating maps),
    <br> 
    Astrology, Astrology is the act of predicting the future with relation with the movement of the celestrial bodies.
    <br>
    Music,
    <br>
    Optics, Optics is the branch of physics which studies the behavior of light.
    <br>
    Philosophy, Philosophy is an activity people undertake when they seek to understand fundamental truths about themselves,
    the world in which they live, and their relationships to the world and to each other.
    `  
}

function majorWorks() {
    document.getElementById("geocentric").style.color = "black";
    document.getElementById("astronomy-contributions").style.color = "black";
    document.getElementById("other-contributions").style.color = "black";
    document.getElementById("major-works").style.color = "blue";
    document.getElementById("Quiz").style.color = "black";
    document.getElementById("pic").src = "The almagest.png";
    document.getElementById("pic").alt = "Picture of the Almagest"

    document.getElementById("content").innerHTML = `Half of Ptolemy's Surving Works where based on Astronomy. 
    One of the most influential works of Ptolemy is the Almagest, which is a Mathematical and Astronomical Treatise which
    describes the motion of stars and planets in accordance with the Geocentric Model of the universe. The Greek name for the Almagest is "Mathēmatikē Syntaxis"
    <br>
    <br>
    <br>
    The Handy Tables (Ancient Greek: Πρόχειροι κανόνες) are a set of astronomical tables,
    together with canons for their use. To facilitate astronomical calculations, Ptolemy tabulated all 
    the data needed to compute the positions of the Sun, Moon and planets, the rising and setting of the stars,
    and eclipses of the Sun and Moon, making it a useful tool for astronomers and astrologers.
    The tables themselves are known through Theon of Alexandria’s version. 
    <br>
    <br>
    <br>
    The Planetary Hypotheses (Ancient Greek: Ὑποθέσεις τῶν πλανωμένων, lit. "Hypotheses of the Planets")
    is a cosmological work, 
    probably one of the last written by Ptolemy, in two books dealing with the structure of the universe and the laws 
    that govern celestial motion. Ptolemy goes beyond the mathematical models of the Almagest to present a physical 
    realization of the universe as a set of nested spheres, in which he used the epicycles of his planetary model 
    to compute the dimensions of the universe. 
    He estimated the Sun was at an average distance of 1,210 Earth radii (now known to actually
    be ~23,450 radii), while the radius of the sphere of the fixed stars was 20,000 times the radius of the Earth.
    The work is also notable for having descriptions on how to build instruments to depict the planets and their movements 
    from a geocentric perspective, much like an orrery would have done for a heliocentric one, presumably for didactic 
    purposes.`

}

function quiz() {
    document.getElementById("geocentric").style.color = "black";
    document.getElementById("astronomy-contributions").style.color = "black";
    document.getElementById("other-contributions").style.color = "black";
    document.getElementById("major-works").style.color = "black";
    document.getElementById("Quiz").style.color = "blue";
    document.getElementById("pic").src = "The almagest.png";
    document.getElementById("pic").alt = "Picture of the Almagest"
    document.getElementById("content").innerHTML = `105580`
}
