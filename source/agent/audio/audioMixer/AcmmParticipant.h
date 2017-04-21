/*
 * Copyright 2017 Intel Corporation All Rights Reserved.
 *
 * The source code contained or described herein and all documents related to the
 * source code ("Material") are owned by Intel Corporation or its suppliers or
 * licensors. Title to the Material remains with Intel Corporation or its suppliers
 * and licensors. The Material contains trade secrets and proprietary and
 * confidential information of Intel or its suppliers and licensors. The Material
 * is protected by worldwide copyright and trade secret laws and treaty provisions.
 * No part of the Material may be used, copied, reproduced, modified, published,
 * uploaded, posted, transmitted, distributed, or disclosed in any way without
 * Intel's prior express written permission.
 *
 * No license under any patent, copyright, trade secret or other intellectual
 * property right is granted to or conferred upon you by disclosure or delivery of
 * the Materials, either expressly, by implication, inducement, estoppel or
 * otherwise. Any license under such intellectual property rights must be express
 * and approved by Intel in writing.
 */

#ifndef AcmmParticipant_h
#define AcmmParticipant_h

#include <boost/scoped_ptr.hpp>
#include <boost/shared_ptr.hpp>

#include <webrtc/modules/audio_conference_mixer/include/audio_conference_mixer_defines.h>

#include <logger.h>

#include "MediaFramePipeline.h"

#include "AudioInput.h"
#include "AudioOutput.h"

namespace mcu {

using namespace woogeen_base;
using namespace webrtc;

class AcmmParticipant : public MixerParticipant {
    DECLARE_LOGGER();

public:
    AcmmParticipant(int32_t id);
    ~AcmmParticipant();

    int32_t id() {return m_id;}

    bool hasInput() {return m_input != NULL;}
    bool hasOutput() {return m_output != NULL;}

    bool setInput(FrameFormat format, FrameSource* source);
    void unsetInput();
    bool setOutput(FrameFormat format, FrameDestination* destination);
    void unsetOutput();

    void NewMixedAudio(const AudioFrame* audioFrame);

    // Implements MixerParticipant
    MixerParticipant::AudioFrameInfo GetAudioFrameWithMuted(int32_t id, AudioFrame* audioFrame) override;
    int32_t NeededFrequency(int32_t id) const override;

private:
    int32_t m_id;

    FrameFormat m_srcFormat;
    FrameFormat m_dstFormat;

    boost::shared_ptr<AudioInput> m_input;
    boost::shared_ptr<AudioOutput> m_output;
};

} /* namespace mcu */

#endif /* AcmmParticipant_h */