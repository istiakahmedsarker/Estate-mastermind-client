import axios from "axios";

const MakeAnnouncement = () => {
    const onSubmit = async (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const description = event.target.description.value

        const announcement = {
            title: title,
            description: description,
        }
        axios.post('  https://b8a12-server-side-istiak-ahmed2902.vercel.app/addAnnouncement', announcement)
            .then(response => {
                console.log('Announcement sent successfully!', response.data);
                event.target.reset();
            })
            .catch(error => {
                console.error('Error sending announcement:', error);
            });

    }
    return (
        <div>
            <div className="flex flex-col mx-auto max-w-3xl p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={onSubmit} action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Title</label>
                            <input type="text" name="title" placeholder="Title" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Description</label>
                            <textarea type="text" name="description" placeholder="Description" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="btn btn-active w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Announce</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAnnouncement;