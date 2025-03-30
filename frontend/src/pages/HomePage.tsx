import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.svg";



const HomePage = () => {

    return (

        <div className="flex flex-col gap-12">

            <div className="md:px bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-18">
                <h1 className="text-5xl font-bold tracking-tight text-amber-600">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">Food is Just a click away!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tight">
                        Order takeway even faster!
                    </span>
                    <span>
                        Download the Casalingo App and get 10% off in your first order.
                    </span>
                    <img src={appDownloadImage}/>
                </div>
            </div>
        </div>


    );

};

export default HomePage;