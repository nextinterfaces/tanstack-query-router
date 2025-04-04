import { useQuery } from '@tanstack/react-query';

const fetchAboutData = () => Promise.resolve({ info: 'About Page - mock API data' });

export default function About() {
    const { data, isLoading } = useQuery({
        queryKey: ['aboutData'],
        queryFn: fetchAboutData,
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>About</h1>
            <p>{data?.info}</p>
        </div>
    );
}
