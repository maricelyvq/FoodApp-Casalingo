import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div className="w-full max-h overflow-hidden ">
            <img src={hero} className="w-full object-cover" alt="Hero" />
        </div>
    );
};

export default Hero;