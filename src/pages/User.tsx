import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

const fetchUser = async (id: string) => {
    // Simulate fetching user data
    return Promise.resolve({ id, name: `User ${id}`, role: 'Viewer' });
};

export default function User() {
    const { userId } = useParams({ strict: false }) as { userId: string };

    const { data, isLoading } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetchUser(userId),
    });

    if (isLoading) return <div>Loading user data...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>ID:</strong> {data?.id}</p>
            <p><strong>Name:</strong> {data?.name}</p>
            <p><strong>Role:</strong> {data?.role}</p>
        </div>
    );
}
