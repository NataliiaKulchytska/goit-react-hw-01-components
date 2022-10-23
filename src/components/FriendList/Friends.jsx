import PropTypes from 'prop-types';
import {
    FriendsList    
} from './Friends.styled';
import { FriendItem } from './FriendItem';

export const Friends = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                )
            })}
        </FriendsList>
    )
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};