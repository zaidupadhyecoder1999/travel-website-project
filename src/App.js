import './App.css';
function App() {
  return (
    <div>
      <h1>Destinations</h1>
    <ol type="1"/>
        <li>India</li>
        <br/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/375px-Mumbai_03-2016_30_Gateway_of_India.jpg" alt="Gateway of India" width="300px" height="300px"/>
        <p>The Gateway of India is an arch-monument completed in 1924 on the waterfront of Mumbai (Bombay), India. It was erected to commemorate the landing of George V for his coronation as the Emperor of India in December 1911 at Strand Road near Wellington Fountain. He was the first British monarch to visit India.</p>
        <hr/>
        <li>USA</li>
        <br/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Front_view_of_Statue_of_Liberty_with_pedestal_and_base_2024.jpg/375px-Front_view_of_Statue_of_Liberty_with_pedestal_and_base_2024.jpg" alt="Statue of Liberty" width="300px" height="300px"/>
        <p>The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor, within New York City. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.</p>
        <hr/>
        <li>England</li>
        <br/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/450px-Tower_Bridge_at_Dawn.jpg" alt="Tower Bridge" width="300px" height="300px"/>
        <p>Tower Bridge is a Grade I listed combined bascule, suspension, and, until 1960, cantilever bridge[1] in London, built between 1886 and 1894, designed by Horace Jones and engineered by John Wolfe Barry with the help of Henry Marc Brunel.[2] It crosses the River Thames close to the Tower of London and is one of five London bridges owned and maintained by the City Bridge Foundation, a charitable trust founded in 1282.</p>
        <hr/>
        <li>Germany</li>
        <br/>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/58/75/f0/caption.jpg?w=600&h=600&s=1" alt="Neuschwanstein Castle" width="300px" height="300px"/>
        <p>Neuschwanstein Castle (German: Schloss Neuschwanstein, pronounced [ˈʃlɔs nɔʏˈʃvaːnʃtaɪn]; Southern Bavarian: Schloss Neischwanstoa) is a 19th-century historicist palace on a rugged hill of the foothills of the Alps in the very south of Germany. It is located in the Swabia region of Bavaria, in the municipality of Schwangau, above the incorporated village of Hohenschwangau, which is also the location of Hohenschwangau Castle. The closest larger town is Füssen. The castle stands above the narrow gorge of the Pöllat stream, east of the Alpsee and Schwansee lakes, close to the mouth of the Lech into Forggensee.</p>
        <hr/>
        <h1>Please fill your details</h1>
        <form/>
            <label for="name">FullName:</label><br/>
            <input type="text" id="name" name="name" required/><br/>
            <hr/>
            <label for="phone">Phone Number:</label><br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required/>
            <hr/>
            <label for="email">Email ID:</label><br/>
            <input type="email" id="email" name="email" required/>
            <hr/>
            <label for="address">Address:</label><br/>
            <input type="address" id="address" name="email" required/>
            <hr/>
            <h2>Please select your destination</h2>
            <input type="radio" id="india" name="destination" value="INDIA"/>
            <label for="india">INDIA</label><br/>
            <input type="radio" id="usa" name="destination" value="USA"/>
            <label for="usa">USA</label><br/>
            <input type="radio" id="england" name="destination" value="ENGLAND"/>
            <label for="england">ENGLAND</label><br/>
            <input type="radio" id="germany" name="destination" value="GERMANY"/>
            <label for="germany">GERMANY</label><br/>
            <hr/>
            <h2>Please fill the details for the payment</h2>
            <label for="cardnumber">Card Number:</label>
            <input type="text" id="cardnumber" name="cardnumber"/><br/><br/>
            <label for="expirydate">Expiry Date:</label>
            <input type="text" id="expirydate" name="expirydate"/><br/><br/>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv"/><br/>
            <hr/>
            <input type="submit" value="Submit"/>
        <form/>
    <ol/>
    </div>
  );
}

export default App;
