const testimonials = [
  {
    username: "Rottenpeacock",
    description: (
      <p>
        I&apos;ve been using pearAI and it&apos;s impressive. I&apos;ve never
        dabbled with an IDE AI assistant before, but this thing can easily boost
        my productivity by 40%. The app has been super smooth, no beta feels
        here.
      </p>
    ),
  },
  {
    username: "jyo",
    description: (
      <>
        <p>
          As a user of pear for Py model development, I&apos;m consistently
          impressed by how well it debugs and explains problems. pic below shows
          when Pear went through 20+ files, pinpointed an issue, and visualised
          a solution for me.
        </p>
        <p className="mt-3">
          I&apos;ve seen a big boost in efficiency and learning, i feel like a
          10x engineer. ystrd I spotted v niché refactoring opportunities thanks
          to it. Compared to conventional methods, it&apos;s a game-changer.
        </p>
      </>
    ),
  },
  {
    username: "Hakuba",
    description: (
      <>
        <p>
          I was able to make a nice minimalistic / abstract home page solely
          using PearAI. ✨
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>Inspired by Anthropics homepage.</li>
          <li>PearAI helped me fix up animations and element sizing.</li>
          <li>A LOT of time was saved b/c of Pear.</li>
        </ul>
      </>
    ),
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6">
      <h1 className="text-center text-5xl font-semibold tracking-tight">
        What our customers are saying?
      </h1>
      <div className="mt-10 columns-1 gap-6 text-gray-800 sm:columns-2 lg:columns-3">
        {[...testimonials, ...testimonials].map(
          ({ username, description }, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid-column rounded-lg bg-gray-50 p-6"
            >
              {description}
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <b>{username}</b>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Testimonials;
