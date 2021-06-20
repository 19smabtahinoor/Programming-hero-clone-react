import React from 'react'
import { Container } from 'react-bootstrap'
function AboutJank() {
    return (
        <>
            <section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center py-8">
                        <div className="col-span-1 pt-8" data-aos="fade-up-right" data-aos-duration="1000">
                            <img className="w-64 h-64 rounded-full" src="../../../assets/jankar.png" alt="Jankars Pic" />
                        </div>

                        <div className="col-span-1 pt-8" data-aos="fade-up-left" data-aos-duration="1000">
                            <h1 className="banglafont text-2xl font-bold">ঝংকার মাহবুব</h1>
                            <p className="banglafont text-md">ঝংকার মাহবুব এক দশক ধরে প্রোগ্রমিং ও ওয়েব ডেভেলপমেন্টের সাথে জড়িত। বুয়েটের পড়ালেখা শেষ করার পর কম্পিউটার সায়েন্সে মাস্টার্স করেন আমেরিকার নর্থ ডেকোটা স্টেট ইউনিভার্সিটি। তারপর সিনিয়র ওয়েব ডেভেলপার হিসেবে দীর্ঘদিন ধরে কাজ করেছেন যুক্তরাষ্ট্রের নিলসেন কোম্পানিতে। বর্তমানে স্ত্রী কারিনা ইসলামসহ বসবাস করছেন যুক্তরাষ্ট্রের ক্যালিফোর্নিয়ার অঙ্গরাজ্যের সিলিকনভ্যালি এরিয়াতে। প্রোগ্রামিংকে সহজ, মজার ও গল্পের ছলে উপস্থাপন করা নিয়ে জনপ্রিয় তিনটা বই লিখে ফেলেছেন তিনি। বইগুলো হচ্ছে: হাবলুদের জন্য প্রোগ্রামিং, প্রোগ্রামিংয়ের বলদ টু বস, আর প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী। এছাড়াও দিক-নির্দেশনামূলক বই লিখেছেন: রিচার্জ your ডাউন ব্যাটারি ও প্যারাময় লাইফের প্যারাসিটামল। আর অবসর সময়ে, Jhankar Mahbub নামক ইউটিউব চ্যানেলে প্রোগ্রামিং ও স্টুডেন্টদেরজন্য দিক-নির্দেশনামূলক ভিডিও বানান।</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutJank
