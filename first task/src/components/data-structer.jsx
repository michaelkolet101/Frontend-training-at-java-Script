import React, { useState, useMemo } from 'react';

const DataTracker = () => {
  const [text, setText] = useState("");
  const [visitors, setVisitors] = useState(new Set());
  const [history, setHistory] = useState(new Set());

  // 1. ניתוח תדירות מילים (מחושב אוטומטית בכל שינוי בטקסט)
  const topWords = useMemo(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const map = new Map();
    words.forEach(w => map.set(w, (map.get(w) || 0) + 1));
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [text]);

  // 2. פונקציות לניהול מבקרים
  const addVisitor = (id) => {
    setHistory(prev => new Set(prev).add(id));
    setVisitors(prev => new Set(prev).add(id));
  };

  const isReturning = (id) => history.has(id);

  // --- 3. פונקציות עזר לאובייקטים ---

// מחזיר אובייקט חדש עם רק המפתחות שצוינו
const pick = (obj, ...keys) => {
    return keys.reduce((acc, key) => {
        if (key in obj) acc[key] = obj[key];
        return acc;
    }, {});
};

// מחזיר אובייקט חדש ללא המפתחות שצוינו
const omit = (obj, ...keys) => {
    const newObj = { ...obj };
    keys.forEach(key => delete newObj[key]);
    return newObj;
};

// מיזוג עמוק (Deep Merge) של מספר אובייקטים
const merge = (...objects) => {
    return objects.reduce((acc, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = acc[key];
            const oVal = obj[key];
            
            if (Array.isArray(oVal)) {
                acc[key] = oVal;
            } else if (typeof oVal === 'object' && oVal !== null && !Array.isArray(oVal)) {
                acc[key] = merge(pVal && typeof pVal === 'object' ? pVal : {}, oVal);
            } else {
                acc[key] = oVal;
            }
        });
        return acc;
    }, {});
};

// --- 4. ארגז כלי מערכים ---

// ערכים ייחודיים (שימוש ב-Set)
const unique = (arr) => [...new Set(arr)];

// חיתוך (ערכים שקיימים בשני המערכים)
const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));

// הפרש (ערכים ב-arr1 שלא קיימים ב-arr2)
const difference = (arr1, arr2) => arr1.filter(item => !arr2.includes(item));

// פיצול מערך לקבוצות בגודל נתון
const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

// --- דוגמאות לשימוש ---

const obj = { a: 1, b: 2, c: 3 };
console.log(pick(obj, 'a', 'c')); // { a: 1, c: 3 }
console.log(omit(obj, 'b'));      // { a: 1, c: 3 }

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(unique(arr1));           // [1, 2, 3, 4]
console.log(intersection(arr1, arr2)); // [3, 4]
console.log(difference(arr1, arr2));   // [1, 2]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]


function randomOperation(handleSuccess, handleError) {
    console.log("מתחיל פעולה...");

    setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // הצלחה ב-50% מהמקרים

        if (isSuccess) {
            handleSuccess("הפעולה הצליחה!");
        } else {
            handleError("הפעולה נכשלה.");
        }
    }, 2000);
}

// קריאה לפונקציה
randomOperation(
    (msg) => console.log("Success:", msg),
    (err) => console.error("Error:", err)
);

  return (
    <div>
      <h3>מנתח טקסט</h3>
      <textarea onChange={(e) => setText(e.target.value)} placeholder="הקלד טקסט כאן..." />
      <ul>
        {topWords.map(([word, count]) => <li key={word}>{word}: {count}</li>)}
      </ul>

      <h3>ניהול מבקרים</h3>
      <button onClick={() => addVisitor("User_" + Math.floor(Math.random() * 10))}>
        הוסף מבקר אקראי
      </button>
      <p>מספר מבקרים ייחודיים: {visitors.size}</p>
    </div>
  );
};

export default DataTracker;