import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>会員登録</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <form className="form">
          <div className="register">
            <label htmlFor="namelabel">氏名</label>

            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="例）鈴木"
            />
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="例）太郎"
            />
          </div>
          <div className="register">
            <label htmlFor="emaillabel">emailアドレス</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="○○○@△△△.jp"
            />
          </div>
          <div className="register">
            <label htmlFor="passwordlabel">パスワード</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="パスワード"
            />
          </div>
          <div className="register">
            <label htmlFor="addresslabel">住所</label>
            <input
              type="text"
              name="postalcode"
              id="postalcode"
              placeholder="例）000-0000"
            />
            <input
              type="text"
              name="address"
              id="address"
              size="50"
              placeholder="例）東京都〇〇市△△町□□マンション＊＊号室"
            />
          </div>
          <div className="register">
            <label htmlFor="tellabel">電話番号（ハイフンなし）</label>
            <input type="text" name="tel" id="tel" placeholder="00000000000" />
          </div>
          <div className="register">
            <label htmlFor="birlabellabel">生年月日（半角）</label>
            <input
              type="text"
              name="birlabel"
              id="birlabel"
              minlenglabel="8"
              maxlenglabel="8"
              placeholder="20220805"
            />
          </div>
          <div className="register">
            <label htmlFor="cardlabel">カード番号</label>
            <input type="text" name="card" id="card" placeholder="0123456789" />
          </div>
          <div className="register">
            <label htmlFor="expiredatelabel">有効期限（年/月）</label>
            <input
              type="text"
              name="expireyear"
              id="expireyear"
              maxlenglabel="2"
              placeholder="22"
            />
            <a>/</a>
            <input
              type="text"
              name="expiremonlabel"
              id="expiremonlabel"
              maxlenglabel="2"
              placeholder="08"
            />
          </div>
          <div className="register">
            <label htmlFor="securitylabel">セキュリティコード</label>
            <input
              type="text"
              name="security"
              id="security"
              placeholder="0123"
            />
          </div>
          <div className="center-button">
            <Link href="/registercomplete">
              <button className="button">登録</button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}
