import Swal from 'sweetalert2';

const handleAlert = (text, title = 'Error!', icon = 'error') => {
	Swal.fire({
		text,
		title,
		icon,
		background: '#fbfbfb',
		confirmButtonColor: '#0532ff99',
	});
};

export { handleAlert };
