

const LoadableLoading = () => {
    return (
        <div className="bg-white inset-0 fixed w-full h-full">
            <div className="flex justify-center items-center min-h-screen">
            <div class="w-16 h-16 rounded-full animate-spin
                    border-2  border-yellow-500 border-t-transparent"></div>
            </div>
        </div>
    );
}

export default LoadableLoading;