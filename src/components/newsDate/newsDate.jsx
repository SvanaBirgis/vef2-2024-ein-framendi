import React from "react";
import styles from "./newsDate.module.css";
import { format } from "date-fns";

export default function NewsDate({ date }) {
    if (!date) {
        return null;
    }

    var formattedDate = format(date, "MMMM do, yyyy H:mma");
    
    return (
        <div className={styles.date}>
            {formattedDate}
        </div>
    );
}