function AboutUs() {
  return (
    <div>
      <section className=" mt-22 grid md:place-items-start  place-items-center">
        <h1 className="text-white text-lg font-semibold  md:text-2xl md:font-semibold">
          About Us
        </h1>
        <div className="md:mt-10  mb-22 mt-8 md:w-full w-90%">
          <p className="text-white md:text-lg text-base font-semibold">
            Welcome to ArtifyNfts, where creativity meets the future of digital
            ownership! We are a passionate team of artists, developers, and
            blockchain enthusiasts dedicated to redefining the way people
            experience and trade digital assets.
          </p>{' '}
          <p className="mt-4 text-white md:text-lg text-base font-semibold">
            At ArtifyNfts, we believe in the power of NFTs (Non-Fungible Tokens)
            to empower creators, collectors, and investors alike. Our platform
            is designed to provide a seamless and secure experience for
            showcasing unique digital art, collectibles, and one-of-a-kind
            creations. Whether you are an established artist looking to share
            your work with the world, or a collector hunting for rare pieces, we
            provide a vibrant marketplace that celebrates creativity and
            innovation. What sets us apart is our commitment to fostering a
            community of creators and collectors who are pushing the boundaries
            of what's possible in the digital space. We offer tools that make it
            easy for artists to mint NFTs, while ensuring that every transaction
            is transparent and secure through blockchain technology. Join us on
            this exciting journey as we unlock the future of art and digital
            assets.
          </p>
        </div>
      </section>
      <div className="grid place-items-center lg:mt-2 w-full">
        {' '}
        <h1 className="text-white text-lg font-semibold  md:text-2xl md:font-semibold">
          Need help?
        </h1>
        <a href="mailto:info@ArtifyNfts.com">
          <button className="text-white md:mt-5 mt-3 font-semibold text-base rounded-lg md:px-14 px-8 py-3 bg-blue-600">
            Contact Support
          </button>
        </a>{' '}
      </div>
    </div>
  );
}

export default AboutUs;
