import Button from "../../components/Button";
import heroImage from "../../assets/heroImage.jpeg";
import LanguageBadge from "../../components/LanguageBadge";

const Hero = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-20 w-full min-h-screen bg-cover bg-center relative flex mt-20 mb-10 pt-14 md:pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
        <div>
          <p className="text-white font-semibold text-sm md:text-base">
            German Sprach <span className="text-yellow-500">Akademie</span>
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold md:leading-tight">
            Learn Languages <br />
            Build your International future
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-xl max-w-2xl text-gray-200">
            Professional German, English, Japanese & Korean language classes
            with international exam preparation and abroad career guidance.
          </p>

          <LanguageBadge />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div>
            <Button
              text="Enroll Now"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-red-500 hover:bg-red-600"
            />
          </div>
          <div>
            <Button
              text="Book Free Counseling"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white hover:bg-white hover:text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
