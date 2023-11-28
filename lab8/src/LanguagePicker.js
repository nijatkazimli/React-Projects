import languageStore from "./zustand/languageStore"

const LanguagePicker = (props) => {
	const setLanguage = languageStore((state) => state.setLanguage);

	return (
		<div className="field">
			<label className="label">Select Language</label>
			<div className="control">
				<div className="select">
					<select onChange={(e) => setLanguage(e.target.value)}>
						<option value="en-US">English</option>
						<option value="de-DE">Deutsch</option>
						<option value="pl-PL">Polski</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default LanguagePicker;
