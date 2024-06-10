import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const QuestionsSection = () => {
	const questions = [
		{
			question: 'How do I get started?',
			answer: 'After launching your game, just press F1 and it will open a menu with all of Velo\'s settings. To enable a specific module, just left click the little checkbox to the left of "enabled". To assign a hotkey, left click the text box to the left of the checkbox and press the desired key. By right clicking you can unassign the hotkey again.',
		},
		{
			question: 'How do color transitions work?',
			answer: 'Usually, color settings are restricted to editing a single fixed color. But by clicking the checkbox to the left, you can enable the advanced color edit. Then, just click the color preview and you can start editing the color transition. You can add new colors by clicking "Add Color" and remove colors by right clicking them. By left clicking, you can edit each color. It will then just continuously cycle through the list of colors. The period determines how long (in milliseconds) it takes for a whole cycle to complete. Some modules allow you to bind the color transition to a different variable like speed. In that case, a value of 0 corresponds to the first color in the list while the period determines the value needed to reach the last color in the list.',
		},
		{
			question: 'What is the Velo leaderboard?',
			answer: 'The Velo leaderboard is a system that allows players to easily create and share time trial runs with each other and keep track of their rankings. There is no setup required and players can just hop in to a solo run session and do some runs, while Velo automatically records, validates, categorizes and submits their runs as they play, allowing for a more seamless experience compared to speedrun.com. By pressing F2, you can access the leaderboard\'s menu and see a ranking of all runs for each map and category. To view a run, just click on it in the list and then click on "view replay". By clicking on "set ghost", you can assign the replay to a ghost and race against it. Make sure to take a look at the rules page. Velo will very pedantically check for these rules.',
		},
		{
			question: 'What data does the Velo leaderboard server store?',
			answer: 'Basically, the Velo leaderboard server only stores all the information you can alreadyaccess with its menu. The only information about you it stores is your Steam name and yourruns. It does not store your IP address.',
		},
		{
			question: "I don't want to participate in the Velo leaderboard server, how can I disable this system?",
			answer: 'To disable the Velo leaderboard, just go to "Leaderboard" -> "general" -> "disable leaderboard" and tick the checkbox.',
		},
		{
			question: 'It does not work, what can I do?',
			answer: "In most cases, this is caused by an anti-virus program. You may need to add Velo's files to the list of exceptions or deactivate the protection entirely while installing. If you  are unsure how it's done, just search on the internet and you will most likely find instructions. If that still doesn't fix your issue, just ask me and we can try to find another solution.",
		},
		{
			question: "My game crashed, was it Velo's fault?",
			answer: 'Most of Velo\'s settings should be safe and playing on default settings will not cause any issues at all. The only really dangerous setting is "multithreaded network", which you may want to consider disabling if you experience more frequent crashes. Loading savestates may also cause crashes if unlucky. Don\'t load savestates made on different maps or it will definitely crash. If a crash is caused by opening the settings menu, please make sure Velo is correctly installed (drag ALL files and folders from the Velo.zip) and if that doesn\'t fix the issue, consider switching your driver from D3D11 to OpenGL or back, or switching from Velo new to Velo old or back. For any crash, I would greatly appreciate if you could send me the "stacktrace.txt" file it creates in the game\'s directory to help me make the game and mod even more crash-proof in future.',
		},
		{
			question: 'What is the difference between Velo new and Velo old?',
			answer: 'Velo new is built upon the 25/Mar/2023 update of the game, which moved its graphics library from XNA to FNA, while Velo old is based on the prior version that still uses XNA. XNA is based on DirectX 9 and has long been discontinued, while with FNA you can choose between DirectX 11, OpenGL and Vulkan. You can force a specific driver by putting "+driver D3D11/OpenGL/Vulkan" to your game\'s launch options. Please note that Velo currently does not support Vulkan! In case you experienced performance issues with the new update, you may want to consider using Velo old over Velo new.',
		},
		{
			question: 'I am unable to press F1, how do I get access to the menu?',
			answer: (
				<>
					In case you cannot press F1 for some reason, open Velo\UI.json and edit the number right next to "Hotkey" to assign it to a different hotkey. This number represents a virtual-key code. To get corresponding code for a specific key, please refer to{' '}
					<a href="https://keycode-visualizer.netlify.app/" target="_blank" className="underline">
						this website
					</a>
					. Then save the file and restart your game.
				</>
			),
		},
	];

	return (
		<div className="page-section">
			<h1 className="page-title">Questions & Answers</h1>

			<Accordion type="single" collapsible className="lg:max-w-screen-lg max-w-screen-md lg:w-screen">
				{questions.map((question, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger className="text-start">{question.question}</AccordionTrigger>
						<AccordionContent>{question.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default QuestionsSection;
