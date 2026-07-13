import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      {/* כותרת מרכזית */}
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        ברוכים הבאים ל-Product Master
      </h1>
      
      {/* תת-כותרת */}
      <p style={{ fontSize: '1.2rem', color: '#636e72', marginBottom: '40px' }}>
        המערכת המתקדמת ביותר לניהול הקטלוג, המלאי והמועדפים שלכם במקום אחד.
      </p>

      {/* אזור פעולה */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button 
          onClick={() => navigate('/products')} 
          style={{ padding: '15px 30px', fontSize: '1.1rem' }}
        >
          צפייה במוצרים
        </button>
        <button 
          onClick={() => navigate('/add')} 
          style={{ padding: '15px 30px', fontSize: '1.1rem', backgroundColor: '#6c5ce7' }}
        >
          הוספת מוצר חדש
        </button>
      </div>

      {/* אזור "למה כדאי להשתמש בנו?" (אופציונלי) */}
      <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <div>
          <h3>ניהול מלאי חכם</h3>
          <p>עקבו אחרי מה שקיים ומה שחסר.</p>
        </div>
        <div>
          <h3>חווית משתמש</h3>
          <p>עיצוב מודרני ומהיר לכל צורך.</p>
        </div>
        <div>
          <h3>סדר וארגון</h3>
          <p>כל המוצרים שלכם תחת קורת גג אחת.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;