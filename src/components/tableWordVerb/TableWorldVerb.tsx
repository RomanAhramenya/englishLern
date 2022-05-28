import React from 'react'
import { useState } from 'react'
import s from './TableWorldVerb.module.scss'
function Pronouns() {
    return (
        <ul>
            <li>I</li>
            <li>YOU</li>
            <li>WE</li>
            <li>THEY</li>
            <li className={s.pronoun}>HE</li>
            <li className={s.pronoun}>SHE</li>
        </ul>
    )
}
function TableWordVerb() {
    const [active,setActive] = useState(0)
    return (
        <div className={s.table}>
           
            <table>
            <caption>БАЗОВАЯ ТАБЛИЦА ПЕТРОВА</caption>
                <thead>
                    <tr>
                    <th className={active === 1 || active === 4 || active === 7 ? s.active : ''}>ВОПРОС</th>
                    <th className={active === 2 || active === 5 || active === 8 ? s.active : ''}>УТВЕРЖДЕНИЕ</th>
                    <th className={active === 3 || active === 6 || active === 9 ? s.active : ''}>ОТРИЦАНИЕ</th>
                   
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td onMouseMove={()=>setActive(1)} onMouseOut={()=>setActive(0)} className={s.QW}>
                        <div className={s.flex}>
                            <div>Will</div>
                            <Pronouns />
                            <div>LOVE?</div>
                        </div>

                    </td>
                    <td onMouseMove={()=>setActive(2)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <Pronouns />
                            <div>WILL LOVE</div>
                        </div>

                    </td>
                    <td onMouseMove={()=>setActive(3)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <Pronouns />
                            <div>WILL NOT LOVE</div>
                        </div>

                    </td>
                    <th className={` ${active === 1 || active === 2 || active === 3 ? s.active : ''}`}>
                        
                        <div>Б</div>
                        <div>У</div>
                        <div>Д</div>
                        <div>У</div>
                        <div>Щ</div>
                        <div>Е</div>
                        <div>Е</div>
                        </th>
                </tr>

                <tr>
                    <td onMouseMove={()=>setActive(4)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <div className={s.vertical}>
                                <div>DO</div>
                                <div className={s.pronoun}>DOES</div>
                            </div>
                            <Pronouns />
                            <div>LOVE?</div>
                        </div>

                    </td>
                    <td onMouseMove={()=>setActive(5)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <Pronouns />
                            <div className={s.vertical}>
                                <div>LOVE</div>
                                <div className={s.pronoun}>LOVES</div>
                            </div>
                        </div>

                    </td>
                    <td onMouseMove={()=>setActive(6)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <Pronouns />
                            <div className={s.vertical}>
                                <div>DON`T LOVE</div>
                                <div className={s.pronoun}>DOESN`T LOVE</div>
                            </div>
                        </div>

                    </td>
                    <th className={` ${active === 4 || active === 5 || active === 6 ? s.active : ''}`}>
                        
                        <div>Н</div>
                        <div>А</div>
                        <div>С</div>
                        <div>Т</div>
                        <div>О</div>
                        <div>Я</div>
                        <div>Щ</div>
                        <div>Е</div>
                        <div>Е</div>
                        </th>
                </tr>

                <tr>
                    <td onMouseMove={()=>setActive(7)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <div>
                                DID
                            </div>
                            <Pronouns />
                            <div>LOVE?</div>
                        </div>

                    </td>
                    <td onMouseMove={()=>setActive(8)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <Pronouns />
                            <div>LOVED</div>
                        </div>

                    </td>
                    <td onMouseMove={()=>setActive(9)} onMouseOut={()=>setActive(0)}>
                        <div className={s.flex}>
                            <Pronouns />
                            <div>DID NOT LOVE</div>
                        </div>

                    </td>
                    <th className={` ${active === 7 || active === 8 || active === 9 ? s.active : ''}`}>
                    <div>П</div>
                    <div>Р</div>
                    <div>О</div>
                    <div>Ш</div>
                    <div>Е</div>
                    <div>Д</div>
                    <div>Ш</div>
                    <div>Е</div>
                    <div>Е</div>
                    </th>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default TableWordVerb