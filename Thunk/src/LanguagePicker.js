import languageStore from "./zustand/languageStore"
import {useEffect} from "react";

const LanguagePicker = (props) => {
	const { language, setLanguage, fetchLanguage } = languageStore();

	useEffect(() => {
		fetchLanguage().then(null);
	}, [fetchLanguage]);
	return (
		<div className="field">
			<label className="label">Select Language</label>
			<div className="control">
				<div className="select">
					<select onChange={(e) => setLanguage(e.target.value)} value={language}>
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
