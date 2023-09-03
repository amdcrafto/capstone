export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Welcome to Little Lemon, where Chicago meets the Mediterranean on a plate. Our dedication to authentic Mediterranean cuisine ensures each dish bursts with vibrant flavors, crafted from the freshest ingredients and time-honored recipes. From succulent kebabs to flavorful mezze, every bite takes you on a journey to the Mediterranean's sun-soaked regions. Join us for a warm and inviting dining experience that captures the essence of this culinary tradition, right here in the heart of Chicago..</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}