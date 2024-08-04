import { DiscordLogo } from "@/components/ui/icons";
import {
  BugIcon,
  CogIcon,
  CrownIcon,
  ExternalLinkIcon,
  GitForkIcon,
  GitPullRequestCreateArrowIcon,
  SearchCodeIcon,
  ShieldCheckIcon,
  UserIcon,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";

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
        <ul className="list-disc pl-5 text-gray-700">
          <li className="leading-relaxed">An AI-Powered Code Editor</li>
          <li className="leading-relaxed">
            <b className="font-semibold text-white-main">Short-term:</b> Beat
            the opps (github copilot, jetbrains ai, cursor.sh, etc.)
          </li>
          <li className="leading-relaxed">
            <b className="font-semibold text-white-main">Long-term:</b> Empower
            individuals by reducing time from ideas to conception.
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
              Be part of a meaningful mission 🚀
            </h4>
            <ul className="list-disc pl-5 text-gray-700">
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
            <h4 className="text-lg font-semibold">Practical 🧠</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                <b className="font-semibold text-white-100">Built in public:</b>{" "}
                you only have to worry about improving the product, we will make
                sure others know about Pear and your contributions, and that
                people use it. Led by founders that have proven distribution
                experience.
              </li>
              <li className="leading-relaxed">
                <b className="font-semibold text-white-100">Resume:</b> all of
                your contributions are public, which means you can list PearAI
                on your resume experience. If you have made contributions that
                are hard to find, let us know and we will surface them. All
                credits will be given.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Fun 🎉</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                Be a part of an active and fun community.
              </li>
              <li className="leading-relaxed">
                Shoutouts for contributors at the end of every week in Discord
                in <code className="text-primary-600">#general</code>.
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
        <Link target="_blank" href="https://github.com/trypear/">
          <h2 className="mb-3 flex items-center gap-2 text-3xl font-semibold">
            Codebase <ExternalLinkIcon className="mt-1 h-5 w-5" />
          </h2>
        </Link>
        {/* <p className="mb-2 leading-relaxed">
          All repos can be found here:{" "}
          <Link target="_blank" className="text-primary-600" href="https://github.com/trypear/">
            https://github.com/trypear/
          </Link>
        </p> */}
        <p className="leading-relaxed text-gray-700">
          PearAI is split into two parts:{" "}
          <b className="text-white-main">pearai-app</b> and{" "}
          <b className="text-white-main">pearai-submodule</b>. Repo structure
          can be found{" "}
          <Link
            href="https://docs.google.com/document/d/1AO9wuZDOae9jj4FGGpVqKUVe4Jj9vpl1FTR3k0RzhU4/edit?usp=drive_link"
            target="_blank"
            className="text-primary-600"
          >
            here
          </Link>
          .
        </p>
        <img
          src="/images/repo-division.png"
          alt="Pear AI repo division"
          className="mx-auto mb-4"
        />
        {/* <ul className="list-disc pl-5 text-gray-700"> */}
        <ul className="list-disc pl-5">
          <li>
            <div className="mb-3">
              <Link
                target="_blank"
                href="https://github.com/trypear/pearai-app"
                className="flex items-center gap-1.5 text-lg font-semibold text-white-main hover:text-primary-600"
              >
                pearai-app <ExternalLinkIcon className="h-4 w-4" />
              </Link>
              <p className="leading-relaxed text-gray-700">
                VSCode fork and parent repository for PearAI. Most contributions
                will NOT end up here.
              </p>
            </div>
          </li>
          <li>
            <div className="mb-3">
              <Link
                target="_blank"
                href="https://github.com/trypear/pearai-submodule"
                className="flex items-center gap-1.5 text-lg font-semibold text-white-main hover:text-primary-600"
              >
                pearai-submodule <ExternalLinkIcon className="h-4 w-4" />
              </Link>
              <p className="leading-relaxed text-gray-700">
                Nearly all of PearAI&apos;s functionality, packaged as a
                built-in VSCode/PearAI extension. It is a fork of Continue, and
                is a git submodule of pearai-app. Most contributions will end up
                here!
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                target="_blank"
                href="https://github.com/trypear/pear-landing-page"
                className="flex items-center gap-1.5 text-lg font-semibold text-white-main hover:text-primary-600"
              >
                pearai-landing-page <ExternalLinkIcon className="h-4 w-4" />
              </Link>
              <p className="leading-relaxed text-gray-700">
                Landing page website (
                <Link
                  target="_blank"
                  className="text-primary-600"
                  href="https://trypear.ai"
                >
                  https://trypear.ai
                </Link>
                )
              </p>
            </div>
          </li>
        </ul>
        {/* </ul> */}
      </div>

      <div>
        <h2 className="mb-3 text-3xl font-semibold">Contributing Roles</h2>
        <table className="border-separate border-spacing-0">
          <thead className="bg-white-main/5">
            <tr>
              <th className="w-36 rounded-tl-sm border border-gray-400 p-2 pl-3 text-left">
                Role
              </th>
              <th className="rounded-tr-sm border border-gray-400 p-2 pl-3 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-t-0 border-gray-400 p-2">
                <b className="font-semibold text-white-main">
                  <UserIcon className="mr-1 inline w-5" /> User
                </b>
              </td>
              <td className="border border-t-0 border-gray-400 p-2">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Anyone</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-t-0 border-gray-400 p-2">
                <b className="font-semibold text-white-main">
                  <GitPullRequestCreateArrowIcon className="mr-1 inline w-5" />{" "}
                  Contributor
                </b>
              </td>
              <td className="border border-t-0 border-gray-400 p-2">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>
                    <b className="font-semibold text-gray-800">Criteria: </b>{" "}
                    &gt;1 commits to codebase
                  </li>
                  <li>
                    <b className="font-semibold text-gray-800">
                      Capabilities:{" "}
                    </b>
                    Can create PR&apos;s
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-t-0 border-gray-400 p-2">
                <b className="font-semibold text-white-main">
                  <ShieldCheckIcon className="mr-1 inline w-5" /> Moderator
                </b>
              </td>
              <td className="border border-t-0 border-gray-400 p-2">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>
                    <b className="font-semibold text-gray-800">Criteria: </b>{" "}
                    Application based (apply here!)
                  </li>
                  <li>
                    <b className="font-semibold text-gray-800">
                      Capabilities:{" "}
                    </b>
                    Can approve PR&apos;s, cannot merge yet
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-t-0 border-gray-400 p-2">
                <b className="font-semibold text-white-main">
                  <WrenchIcon className="mr-1 inline w-5" /> Maintainer
                </b>
              </td>
              <td className="border border-t-0 border-gray-400 p-2">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>
                    <b className="font-semibold text-gray-800">Criteria: </b>{" "}
                    Approval-based from Admins / has been a moderator for a
                    while
                  </li>
                  <li>
                    <b className="font-semibold text-gray-800">
                      Capabilities:{" "}
                    </b>
                    Read/write access to main
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="rounded-bl-sm border border-t-0 border-gray-400 p-2">
                <b className="font-semibold text-white-main">
                  <CrownIcon className="mr-1 inline w-5" /> Admin
                </b>
              </td>
              <td className="rounded-br-sm border border-t-0 border-gray-400 p-2">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Pan and Nang</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How can I get started contributing? */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">
          How can I get started contributing?
        </h2>
        <p className="mb-2 leading-relaxed text-gray-700">
          This is how you run the PearAI app for development.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-2 leading-relaxed">
            <DiscordLogo className="mt-1 h-5 w-5 shrink-0 text-white-main" />
            <div>
              <h4 className="font-semibold text-white-main">
                Join the Discussion:
              </h4>
              <p className="text-gray-700">
                Take a look at existing channels, conversations/threads, pinned
                messages in the{" "}
                <Link
                  href="https://discord.gg/7QMraJUsQt"
                  className="text-primary-600"
                >
                  Discord
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 leading-relaxed">
            <SearchCodeIcon className="mt-1 h-5 w-5 shrink-0 text-white-main" />
            <div>
              <h4 className="font-semibold text-white-main">
                Understand Current Work:
              </h4>
              <p className="text-gray-700">
                Acquire context by seeing what is currently being worked on by
                the community:{" "}
                <Link
                  target="_blank"
                  className="text-primary-600"
                  href="https://github.com/orgs/trypear/projects"
                >
                  Quest Boards
                </Link>
                . These are the current priorities.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 leading-relaxed">
            <BugIcon className="mt-1 h-5 w-5 shrink-0 text-white-main" />
            <div>
              <h4 className="font-semibold text-white-main">Explore Issues:</h4>
              <p className="text-gray-700">
                Take a look at all issues here:{" "}
                <Link
                  target="_blank"
                  className="text-primary-600"
                  href="https://github.com/trypear/pearai-app/issues"
                >
                  https://github.com/trypear/pearai-app/issues
                </Link>
                . To know if someone is already working on it, see if anyone is
                assigned, or if anyone claimed the task in the comments. You can
                also ask in the Discord.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 leading-relaxed">
            <GitForkIcon className="mt-1 h-5 w-5 shrink-0 text-white-main" />
            <div>
              <h4 className="font-semibold text-white-main">
                Fork and Branch:
              </h4>
              <p className="text-gray-700">
                Fork the repository and create your branch from main.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 leading-relaxed">
            <CogIcon className="mt-1 h-5 w-5 shrink-0 text-white-main" />
            <div>
              <h4 className="font-semibold text-white-main">
                Follow the Guide:
              </h4>
              <p className="text-gray-700">
                To run the app locally, follow the{" "}
                <Link
                  target="_blank"
                  className="text-primary-600"
                  href="https://github.com/trypear/pearai-app/blob/main/CONTRIBUTING.md"
                >
                  contributing guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <p className="mb-2 mt-2 leading-relaxed text-gray-700">
          We know many of you will have great ideas. However, please keep in
          mind we are also bounded by priorities, and will focus on those first.
          If you&apos;d like to try your hand at an idea that is not currently
          prioritized, feel free to send designs or create PRs, but no promises
          for accepting them!
        </p>
      </div>

      {/* Community */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">Community</h2>
        <p className="leading-relaxed text-gray-700">
          WE ARE IN THIS TOGETHER 🗣️🗣️🗣️🗣️ LOWERING THE BARRIER TO ENTRY FOR
          CODING
        </p>
        <p className="leading-relaxed text-gray-700">
          Join the discord:{" "}
          <Link
            href="https://discord.gg/PBjrGEH52b"
            target="_blank"
            className="text-primary-600"
          >
            https://discord.gg/PBjrGEH52b
          </Link>
        </p>
        <p className="leading-relaxed text-gray-700">
          Join in on weekly stream schedules: COMING SOON
        </p>
        <p className="mt-3 text-gray-700">Follow the journey:</p>

        <ul className="list-disc pl-5 text-gray-700">
          <li className="leading-relaxed">
            <b className="font-semibold text-white-main">
              Nang&apos;s channel (new vid every month):{" "}
            </b>

            <Link
              target="_blank"
              className="text-primary-600"
              href="https://www.youtube.com/@nang88"
            >
              https://www.youtube.com/@nang88
            </Link>
          </li>
          <li className="leading-relaxed">
            <b className="font-semibold text-white-main">
              Pan&apos;s Day (previous startup vlogs):{" "}
            </b>

            <Link
              target="_blank"
              className="text-primary-600"
              href="https://www.youtube.com/@PansDay"
            >
              https://www.youtube.com/@PansDay
            </Link>
          </li>
          <li className="leading-relaxed">
            <b className="font-semibold text-white-main">
              Pan&apos;s main channel (new startup vlogs here):{" "}
            </b>

            <Link
              target="_blank"
              className="text-primary-600"
              href="https://youtube.com/@FryingPan"
            >
              https://youtube.com/@FryingPan
            </Link>
          </li>
          <li className="leading-relaxed">
            <b className="font-semibold text-white-main">Panang Instagram:</b>{" "}
            <Link
              target="_blank"
              className="text-primary-600"
              href="https://instagram.com/@panangbros"
            >
              https://instagram.com/@panangbros
            </Link>
          </li>
        </ul>
      </div>

      {/* Important Links */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">Important Links</h2>
        <p className="text-gray-700">
          The only link needed is the{" "}
          <Link
            href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit?usp=sharing"
            target="_blank"
            className="text-primary-600"
          >
            Master Doc
          </Link>
          !
        </p>
      </div>

      {/* Other */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">Other</h2>
        <p className="leading-relaxed text-gray-700">
          Want to use the product, or know someone that does?
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="leading-relaxed">
            Join the{" "}
            <Link
              href="https://forms.gle/X7Fq481eWfQbjtH8A"
              target="_blank"
              className="text-primary-600"
            >
              waitlist
            </Link>
            !
          </li>
        </ul>
        <p className="mt-3 leading-relaxed text-gray-700">
          Want to contribute to the mission?
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="leading-relaxed">
            Join the{" "}
            <Link
              href="https://discord.gg/7QMraJUsQt"
              target="_blank"
              className="text-primary-600"
            >
              discord
            </Link>
            !
          </li>
          <li className="leading-relaxed">
            Apply to be a{" "}
            <Link
              href="https://forms.gle/HZkzUJ3SDmRiqeiS9"
              target="_blank"
              className="text-primary-600"
            >
              moderator
            </Link>
            !
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContributionPage;
