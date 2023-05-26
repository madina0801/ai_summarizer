import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				<img src={logo} alt="sumz_logo" className="w-28 object-contain" />

				<button type="button" onClick={() => window.open('https://github.com/madina0801/ai_summarizer', '_blank')} className="black_btn">
					GitHub
				</button>
			</nav>

			<h1 className="head_text">
				Summarize Articles with <br className="max-md:hidden" />
				<span className="orange_gradient">OpenAI GPT-4</span>
			</h1>

			<h2 className="desc">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, ad incidunt repellat esse earum velit praesentium vitae odio nisi minima distinctio commodi quod deserunt excepturi explicabo sit, assumenda illo quisquam!
			</h2>
		</header>
  );
}

export default Hero;
