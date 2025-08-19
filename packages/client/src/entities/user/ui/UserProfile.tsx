import { ProfileIcon } from '@shared/icons/ProfileIcon';

interface UserProfileProps {
	name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name }) => {
	return (
		<div className="self-center flex flex-col items-center space-y-5 p-[30px] rounded-[5px] border border-[#EAEAEA] shadow-[0_0_5px_0_#0000000D]">
			<ProfileIcon width={100} />
			<span className="font-bold text-lg tracking-[0.05em]">{name}</span>
		</div>
	);
};

export default UserProfile;
