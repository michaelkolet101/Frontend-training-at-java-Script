import React from 'react';

function About(){
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>אודות המערכת</h1>
      
      <p style={{ fontSize: '1.1rem', color: '#2d3436' }}>
        <strong>Product Master</strong> היא מערכת ניהול מוצרים שנבנתה מתוך מטרה לפשט את תהליך העבודה של בעלי עסקים, מנהלי מלאי ומשתמשים פרטיים כאחד.
      </p>

      <h3 style={{ color: '#6c5ce7', marginTop: '30px' }}>מה עומד מאחורי הפרויקט?</h3>
      <p>
        האפליקציה פותחה כפרויקט סיכום בקורס React, תוך שימוש בטכנולוגיות המתקדמות ביותר בשוק. 
        המטרה שלנו הייתה ליצור ממשק מהיר, נגיש ומעוצב שמאפשר לבצע פעולות מורכבות – 
        כמו ניהול מלאי, סינון מוצרים ושמירת מועדפים – במינימום מאמץ.
      </p>

      <h3 style={{ color: '#6c5ce7', marginTop: '30px' }}>מה אפשר לעשות במערכת?</h3>
      <ul style={{ paddingRight: '20px' }}>
        <li><strong>ניהול קטלוג:</strong> צפייה במוצרים איכותיים ממאגר נתונים בזמן אמת.</li>
        <li><strong>חווית משתמש מותאמת:</strong> הוספת מוצרים, מחיקה וסימון מועדפים בלחיצת כפתור.</li>
        <li><strong>עיצוב רספונסיבי:</strong> המערכת נראית מצוין בכל מסך – ממחשבים נייחים ועד סמארטפונים.</li>
      </ul>

      <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f1f2f6', borderRadius: '10px' }}>
        <p>
          <em>פותח על ידי: מיכאל קולט</em><br />
          <em>שנה: 2026 | טכנולוגיות: React, React Router, CSS3, REST API</em>
        </p>
      </div>
    </div>
  );
};

export default About;