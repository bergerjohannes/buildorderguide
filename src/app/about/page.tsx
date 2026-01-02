import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Header text="About Build Order Guide" />

          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Get in touch
            </h2>
          </div>
          <p className="text-foreground mx-auto my-4 w-11/12 max-w-lg text-center">
            A build is missing, there&apos;s a mistake, something can be
            improved, or you need help creating your own build order? Feel free
            to join our{" "}
            <a
              href="https://discord.gg/JmfGYQcM3Z"
              className="text-foreground hover:text-foreground underline"
            >
              Discord server
            </a>
            .
          </p>

          <br />
          <br />
          <br />

          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Contribute
            </h2>
          </div>
          <p className="text-foreground mx-auto my-4 w-11/12 max-w-lg text-center">
            Looking to contribute to the project? Check out Build Order
            Guide&apos;s{" "}
            <a
              href="https://github.com/triplejberger/buildorderguide"
              className="text-foreground hover:text-foreground underline"
            >
              GitHub page
            </a>
            .
          </p>

          <br />
          <br />
          <br />

          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Legal Information
            </h2>
          </div>
          <p className="text-foreground mx-auto my-4 w-11/12 max-w-lg text-center">
            Build Order Guide was created under{" "}
            <a
              href="https://www.xbox.com/en-us/developers/rules"
              className="text-foreground hover:text-foreground underline"
            >
              Microsoft&apos;s Game Content Usage Rules
            </a>{" "}
            using assets from Age of Empires II, and it is not endorsed by or
            affiliated with Microsoft in any way. Age of Empires II: HD and Age
            of Empires II: Definitive Edition are trademarks or registered
            trademarks of Microsoft Corporation in the U.S. and other countries.
          </p>
        </div>
      </main>
    </div>
  );
}
