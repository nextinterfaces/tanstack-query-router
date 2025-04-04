import { useQuery } from '@tanstack/react-query';

const fetchHomeData = () => Promise.resolve({ message: 'Welcome to the Home Page!' });

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ['homeData'],
        queryFn: fetchHomeData,
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Home</h1>
            <p>{data?.message}</p>
        </div>
    );
}
