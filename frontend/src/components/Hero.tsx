import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div className="w-full max-h-(200px) overflow-hidden ">
            <img src={hero} className="w-full p-3 object-cover" alt="Hero" />
        </div>
    );
};

export default Hero;