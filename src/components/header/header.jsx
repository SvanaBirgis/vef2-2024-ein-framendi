'use client'
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
} from "@nextui-org/react";
import useSWR from 'swr'
import { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'


export const fetcher = async (url) => {
    return fetch(url)
        .then(async (res) => {
            return await res.json();
        });
};

export default function Header() {
    const router = useRouter()

    const [leagues, setLeagues] = useState([]);
    const { data, isLoading, error, mutate } = useSWR(`/api/leagues`, fetcher)
    useEffect(() => {
        setLeagues(data);

        return () => {
            setLeagues([]);
        }
    }, [data])

    if (error) return <div>Failed to load..</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <div className={styles.header}>
                <div className={styles.homeContainer}>
                    <Link href='/'>Heim</Link>
                </div>
                <div className={styles.newsContainer}>
                    <Link href='/news'>Fréttir</Link>
                </div>
                <div className={styles.leaguesContainer}>
                    <Dropdown>
                        <DropdownTrigger>

                            Deildir

                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example"
                            onAction={(key) => router.push(`/news/leagues/${key}`)}
                        >
                            {data?.length > 0 && data.map((league) => (
                                <DropdownItem key={league.id}>{league.name}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
        </div>
    );
}