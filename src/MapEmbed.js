const MapEmbed = () => {
    return (
      <div style={{ width: "100%", height: "400px", margin: "20px 0" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=Taj+Mahal,Agra,India&key=AIzaSyCyhV7jmRJo6IiSBfRtYmR3yAZtWvVGBj8"
        >
            Hello
        </iframe>
      </div>
    );
  };
  
  export default MapEmbed;
  