import { FunctionComponent, useState } from "react";

export const Profile: FunctionComponent<ProfileProps> = (props) => {
	const {} = props;
	const [activeProfile,setActiveProfile] = useState(false)
	console.log(activeProfile,'Profile nonactive')
	
	return (
		<>
			<input type="button" value={'Profile'} onClick={()=> setActiveProfile(true)} />
		</>
	);
	}

export interface ProfileProps {
}
