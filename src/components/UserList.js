import React from 'react'
import { getAllUsers } from '../service/UserService';

const UserList = ({ users }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = UserService.getAllUsers;
                setUsers(response.data); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;




    return (
        <div className="user-list-container">
            <div className="user-list">
                {users.map((user, index) => (
                    <Link
                        key={index}
                        to={`/user?id=`+user.id}
                        className="user-card-link"
                    >
                        <div key={index} className="user-card">
                            <h3 className="user-name">{user.name}</h3>
                            <p className="user-description">{user.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserList