import Link from "next/link";
import React from "react";

const ContributionPage = () => {
  return (
    <div className="mx-auto max-w-screen-sm space-y-10 pb-20 pt-32">
      <div className="mb-12">
        <h1 className="mb-2 text-center text-5xl font-semibold text-primary-600">
          PearAI team contributing 101
        </h1>
        <p className="text-center text-lg">
          <b>Mission:</b> Make Best Code Editor Possible
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-3xl font-semibold">What is Pear.AI?</h2>
        <ul className="list-disc pl-5 text-gray-800/80">
          <li className="leading-relaxed">
            An AI-Powered Code Editor:{" "}
            <Link className="text-primary-600" href="https://trypear.ai">
              https://trypear.ai
            </Link>
          </li>
          <li className="leading-relaxed">
            Short-term: Beat the opps (github copilot, jetbrains ai, cursor.sh,
            etc.)
          </li>
          <li className="leading-relaxed">
            Long-term: Empower individuals by reducing time from ideas to
            conception.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-3xl font-semibold">
          Why Should You Contribute?
        </h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">
              Be part of a meaningful mission
            </h4>
            <ul className="list-disc pl-5 text-gray-800/80">
              <li className="leading-relaxed">
                Empower people to bring their ideas into reality.
              </li>
              <li className="leading-relaxed">
                Empower people to be entrepreneurs, giving more power to the
                individual.
              </li>
              <li className="leading-relaxed">
                Be at the forefront of the ever-nearing landscape change of
                software engineering/coding.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Practical</h4>
            <ul className="list-disc pl-5 text-gray-800/80">
              <li className="leading-relaxed">
                Built in public: you only have to worry about improving the
                product, we will make sure others know about Pear and your
                contributions, and that people use it. Led by founders that have
                proven distribution experience.
              </li>
              <li className="leading-relaxed">
                Resume: all of your contributions are public, which means you
                can list PearAI on your resume experience. If you have made
                contributions that are hard to find, let us know and we will
                surface them. All credits will be given.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Fun</h4>
            <ul className="list-disc pl-5 text-gray-800/80">
              <li className="leading-relaxed">
                Be a part of an active and fun community.
              </li>
              <li className="leading-relaxed">
                Shoutouts for contributors at the end of every week in Discord
                in <code>#general</code>.
              </li>
              <li className="leading-relaxed">
                Shoutouts for contributors in our videos.
              </li>
              <li className="leading-relaxed">
                Discounts when the product is released for top contributors.
              </li>
              <li className="leading-relaxed">
                Free merch for top contributors.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-3xl font-semibold">Codebase</h2>
        <p className="mb-2 leading-relaxed">
          All repos can be found here:{" "}
          <Link className="text-primary-600" href="https://github.com/trypear/">
            https://github.com/trypear/
          </Link>
        </p>
        <ul className="list-disc pl-5 text-gray-800/80">
          <li className="leading-relaxed">
            PearAI is split into two parts. pearai-app and pearai-submodule.
            Repo structure can be found here.
          </li>
          <li className="leading-relaxed">
            <b className="text-white-main">pearai-app:</b> VSCode fork and
            parent repository for PearAI. Most contributions will NOT end up
            here.
          </li>
          <li className="leading-relaxed">
            <b className="text-white-main">./extensions/pearai-submodule:</b>{" "}
            Nearly all of PearAI&apos;s functionality, packaged as a built-in
            VSCode/PearAI extension. It is a fork of Continue, and is a git
            submodule of pearai-app. Most contributions will end up here!
          </li>
          <li className="leading-relaxed">
            <b className="text-white-main">pearai-landing-page:</b> landing page
            website (
            <Link className="text-primary-600" href="https://trypear.ai">
              https://trypear.ai
            </Link>
            )
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-3xl font-semibold">
          How can I get started contributing?
        </h2>
        <p className="mb-2 leading-relaxed">
          This is how you run the Pear.AI app for development.
        </p>
        <ul className="list-disc pl-5 text-gray-800/80">
          <li className="leading-relaxed">
            Take a look at existing channels, conversations/threads, pinned
            messages in the Discord.
          </li>
          <li className="leading-relaxed">
            Acquire context by seeing what is currently being worked on by the
            community: Quest Boards. These are the current priorities.
          </li>
          <li className="leading-relaxed">
            Take a look at all issues here:{" "}
            <Link
              className="text-primary-600"
              href="https://github.com/trypear/pearai-app/issues"
            >
              https://github.com/trypear/pearai-app/issues
            </Link>
            . To know if someone is already working on it, see if anyone is
            assigned, or if anyone claimed the task in the comments. You can
            also ask in the Discord.
          </li>
          <li className="leading-relaxed">
            Fork the repository and create your branch from main.
          </li>
          <li className="leading-relaxed">
            To run the app locally, follow the contributing guide.
          </li>
        </ul>
        <p className="mb-2 mt-2 leading-relaxed">
          We know many of you will have great ideas. However, please keep in
          mind we are also bounded by priorities, and will focus on those first.
          If you&apos;d like to try your hand at an idea that is not currently
          prioritized, feel free to send designs or create PRs, but no promises
          for accepting them!
        </p>
      </div>
    </div>
  );
};

export default ContributionPage;
