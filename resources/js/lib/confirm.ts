import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

interface ConfirmDeleteOptions {
    title: string
    text?: string
    confirmButtonText?: string
}

interface AlertOptions {
    title: string
    text: string
    confirmButtonText?: string
}

const swalButtonClasses = {
    confirmButton: 'inline-flex items-center justify-center bg-[#683030] hover:bg-[#572929] text-white font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm',
    cancelButton: 'inline-flex items-center justify-center border border-gray-200 text-gray-600 hover:border-gray-300 font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm',
}

export async function confirmDelete({
    title,
    text = 'This action cannot be undone.',
    confirmButtonText = 'Yes, remove it',
}: ConfirmDeleteOptions): Promise<boolean> {
    const result = await Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText,
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        focusCancel: true,
        buttonsStyling: false,
        customClass: {
            popup: 'rounded-sm',
            title: 'font-serif text-navy-950',
            htmlContainer: 'text-gray-500',
            actions: 'gap-3',
            ...swalButtonClasses,
        },
    })

    return result.isConfirmed
}

export async function showDashboardAlert({
    title,
    text,
    confirmButtonText = 'Understood',
}: AlertOptions): Promise<void> {
    await Swal.fire({
        title,
        text,
        icon: 'info',
        confirmButtonText,
        buttonsStyling: false,
        customClass: {
            popup: 'rounded-sm',
            title: 'font-serif text-navy-950',
            htmlContainer: 'text-gray-500',
            actions: 'gap-3',
            confirmButton: swalButtonClasses.confirmButton,
        },
    })
}
