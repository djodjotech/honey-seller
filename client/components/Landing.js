import React from 'react';
import style from './style.less';

export default function Landing() {
    return (
        <section className={style.initialContent}>
            <h1 className={style.title}>Stefanov Zlatni Med</h1>
            <p className={style.landingText}>
                U našoj online prodavnici, med nije samo proizvod, već putovanje kroz vreme i prostor, pružajući vam da osetite suštinu prirode u svakom zalogaju. Od pažljivo biranih cvetova do vaše trpeze, naš med je simbol posvećenosti, tradicije i neupitne kvalitete.Zalažemo se za održivu praksu pčelarstva, poštujući pčele i prirodu koja nam omogućava da kreiramo ovaj dragoceni eliksir
            </p>
            <button className={style.showMore}>Saznaj vise</button>
        </section>
    )
}