import React from 'react'

export default function Navbar() {
  return (
    <div>
        <table className='Nav_tab'>
            <tr>
                <td>Logo</td>
                <td></td>
                <td>
                    <table>
                        <tr>
                            <td>search</td>
                            <td>profile</td>
                            <td>trending</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
  )
}
