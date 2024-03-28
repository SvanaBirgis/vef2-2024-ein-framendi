import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const result = await getLeagues();
        if (!result.ok) {
            return NextResponse.json({ error: 'failed to fetch leagues in api route' }, { status: result.status })
        }
        let leagues = await result.json();
        leagues.sort((a, b) => new Date(a.date) - new Date(b.date));
        return NextResponse.json(leagues, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: 'an error occurred in api route' }, { status: 500 })
    }
}



async function getLeagues() {
    const res = await fetch(`${process.env.API_URL}/leagues`, { cache: 'no-store' });
    return res;
}

