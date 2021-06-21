import React from 'react'
import './Profile.css'
import { Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {

    const { user } = useAuth0();

    return (
        <>
            <section className="pt-24">
                <Container>
                    <div className="bg-gray-100 rounded-xl shadow-xl p-9">
                        <h1 className="text-center text-3xl border-b border-gray-300 pb-3">My Profile</h1>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                            <div className="p-8 flex flex-col items-center">
                                <img className="rounded-full shadow-lg" src={user.picture} alt={user.name} width="200px" height="200px" />
                            </div>
                            <div className="py-8">
                                <table>
                                    <tbody>
                                        <tr className="py-6">
                                            <td className="font-bold">First Name</td>
                                            <td>{user.given_name}</td>
                                        </tr>
                                        <tr className="py-3">
                                            <td className="font-bold">Last Name</td>
                                            <td>{user.family_name}</td>

                                        </tr>
                                        <tr className="py-3">
                                            <td className="font-bold">Nickname</td>
                                            <td>{user.nickname}</td>

                                        </tr>
                                        <tr className="py-3">
                                            <td className="font-bold">Locale</td>
                                            <td>{user.locale}</td>

                                        </tr>
                                        <tr className="py-3">
                                            <td className="font-bold">Email</td>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr className="py-3">
                                            <td className="font-bold">Email</td>
                                            <td>{user.email_verified ? 
                                            (
                                                <div className="flex flex-row items-center space-x-2">
                                                    <span className="flex flex-row justify-center font-semibold">Email Verified</span>
                                                    <img src="../../../assets/verified.svg" alt="verified" width="20px" height="20px"/>
                                                </div>
                                            ) 
                                            : 
                                            (
                                            <div className="flex flex-row items-center space-x-2">
                                                <span className="flex flex-row justify-center font-semibold">Email Not Verified</span>
                                                <img src="../../../assets/unverified.png" alt="unverified" width="20px" height="20px"/><br/>
                                                <span className="text-red-700">Check your email for verification !!</span>
                                            </div>
                                            )}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}



export default Profile
