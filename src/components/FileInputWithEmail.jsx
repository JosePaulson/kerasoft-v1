import { useState } from 'react'
import { FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {
  getStorage,
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from 'firebase/storage'
import { db } from '../firebase.config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
function FileInputWithEmail() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    resume: {}
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    if(!e.target.files) {
      setFormData(prev => {
        return {
          ...prev,
          [e.target.id]: e.target.value
        }
      })
    }

    if(e.target.files) {
      setFormData(prev => {
        return {
          ...prev,
          resume: e.target.files
        }
      })
    }
  }

  const onSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)

      if(!formData.resume.length) {
        setLoading(false)
        // toast.warning('No file to upload.')
        return
      }

      const storeResume = async (resume) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage()
          const filename = `${resume.name}`
          const storageRef = ref(storage, 'resume/' + filename)
          const uploadTask = uploadBytesResumable(storageRef, resume)

          uploadTask.on('state_changed', (snapshot) => {
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            // console.log('Upload is ' + progress + '% done')
            // switch (snapshot.state) { //eslint-disable-line
            //   case 'paused': 
            //     alert('Upload paused')
            //     break
            //   case 'running':
            //     alert('Upload in progress')
            //     break
            // }
          }, 
          (error) => {
            //Handle unsuccessful uploads
            reject(error)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                resolve(downloadURL)
              })
            }
          )
        })
      }

      const resumeUrl = await Promise.all(
        [...formData.resume].map((resume)=> storeResume(resume))
      ).catch(() => {
          setLoading(false)
          // toast.error('Resume not uploaded')
          return
      })
      // console.log(resumeUrl)
      const formDataCopy = {
        ...formData,
        resumeUrl,
        timestamp: serverTimestamp()
    }

    delete formDataCopy.resume

    await addDoc(collection(db, 'resumes'), formDataCopy)
    setLoading(false)
    navigate(`/home`)
    // toast.success('Resume uploaded')
  }

  return (
    <form className='relative mt-20  mb-4 pb-1 border-b-[1px] border-[#f50057] flex' onSubmit={onSubmit}>
        <div className='flex flex-initial w-full'>
          <FaEnvelope size={24} fill='#f50057' />
          <input 
            id='email'
            onChange={handleChange}
            value={formData.email}
            type="email" 
            placeholder='Enter your email' 
            className='w-full pl-2 focus:outline-none' 
            required
          />
        </div>
        <label 
          className='mb-1 flex uppercase items-center' 
          htmlFor="resume"><FaArrowUp fill='#f50057' 
          className='mb-1 mr-1'
        />
          Resume
        </label>
        <input 
          id='resume' 
          name='fileInput' 
          onChange={handleChange}
          className='hidden flex flex-i' 
          type="file" 
          accept='.jpg,.pdf,.doc,.docx,' 
          max='1' 
        />
        <button 
          type='submit' 
          className='absolute btn btn-ghost bottom-[-3.4rem] text-slate-700 tracking font-medium'
        >
          {loading ? 'Dispatching...' : 'Dispatch' }
        </button>
    </form>
  )
}

export default FileInputWithEmail