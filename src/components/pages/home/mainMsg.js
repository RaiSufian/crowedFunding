const Message = ({ data }) => {
    return (
        <section className="msg_section">
            <div className="lg:w-[1260px] max-w-full mx-auto font-mont text-white pt-10">
                <div className="md:py-[10vh] py-5vh] md:px-[10vw]">
                    <div className="md:py-16 py-10 xl:px-32 lg:px-28 md:px-16 px-4 text-center ">
                        <h3 className="md:text-2xl text-xl mb-6  font-bold leading-loose"><div
                            dangerouslySetInnerHTML={{
                                __html: data?.wid_details
                            }}
                        /></h3>
                        <strong className=" text-lg  font-lato"> {data?.wid_heading} </strong>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Message;