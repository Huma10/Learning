import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChannelService from "../../service/channel.service";
const AddChannel = () => {

    const [channelData, setChannelData] = useState({
        channelName: ""
    })

    const handleChange = (e) => {
        setChannelData({ ...channelData, [e.target.name]: e.target.value })
    }

    const addchannel = async (e) => {
        try {
            e.preventDefault();
            const { channelName } = channelData;
            if (channelName === "") {
                toast.error("Channel name is required", {
                    position: toast.POSITION.TOP_CENTER,
                    className: "toast-message"
                })
            } else {
                const response = await ChannelService.createChannel(channelData)
                if (response.status === 201) {
                    toast.error("Channel created successfully", {
                        position: toast.POSITION.TOP_CENTER,
                        className: "toast-message"
                    })
                }
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <main className="main-container">
                <div className="main-title">
                    <h3>Add Channel</h3>
                </div>
                <div className="main-body">

                    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                        <div class="row gx-lg-5 align-items-center mb-5">
                            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                                <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                                <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
                                <div class="card bg-glass">
                                    <div class="card-body px-4 py-5 px-md-5">
                                        <form>
                                            {/* <!-- Channel input --> */}
                                            <div class="form-outline mb-4">
                                                <input type="text" name="channelName" onChange={handleChange} id="form3Example3" class="form-control" />
                                                <label class="form-label" for="form3Example3">Channel Name</label>
                                            </div>
                                            {/* <!-- Submit button --> */}
                                            <div class="text-center">
                                                <button type="submit" onClick={addchannel} class="btn btn-primary btn-block mb-4 text-center">
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </>
    )
}

export default AddChannel